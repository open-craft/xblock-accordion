"""
Tests for AccordionXBlock
"""

from django.test import TestCase
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from accordion import AccordionXBlock
from accordion.accordion import _strip_html


def test_student_view_json_data():
    """Test the data structure returned by student_view."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    block = AccordionXBlock(ToyRuntime(), scope_ids=scope_ids)
    frag = block.student_view()
    as_dict = frag.to_dict()
    assert "panels" in as_dict["json_init_args"]
    assert "styling" in as_dict["json_init_args"]
    assert "url" in as_dict["json_init_args"]


def test_studio_view_json_data():
    """Test the data structure returned by studio_view."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    block = AccordionXBlock(ToyRuntime(), scope_ids=scope_ids)
    frag = block.studio_view()
    as_dict = frag.to_dict()
    assert "panels" in as_dict["json_init_args"]
    assert "styling" in as_dict["json_init_args"]
    assert "url" in as_dict["json_init_args"]


def test_index_dictionary():
    """Test the search index dictionary includes titles and stripped contents."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    block = AccordionXBlock(ToyRuntime(), scope_ids=scope_ids)
    block.display_name = "My Accordion"
    block.panels = [
        {
            "title": "First panel",
            "contents": "<p>Hello <strong>world</strong></p>",
            "expanded": True,
        },
        {"title": None, "contents": "Plain text"},
    ]
    block.styling = {"color": "red"}
    block.border_style = "solid"

    result = block.index_dictionary()

    assert result["content_type"] == "Accordion"
    assert result["content"]["display_name"] == "My Accordion"
    content = result["content"]["accordion_content"]
    assert "First panel" in content
    assert "Hello" in content
    assert "world" in content
    assert "Plain text" in content
    # HTML tags are stripped.
    assert "<p>" not in content
    assert "<strong>" not in content
    # Presentation-only data is excluded.
    assert "expanded" not in content
    assert "red" not in str(result["content"])
    assert "solid" not in str(result["content"])


def test_index_dictionary_empty_panels():
    """Test index_dictionary with no panels and malformed panel entries."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    block = AccordionXBlock(ToyRuntime(), scope_ids=scope_ids)
    block.panels = ["not-a-dict", {}]

    result = block.index_dictionary()

    assert result["content_type"] == "Accordion"
    assert result["content"]["accordion_content"] == ""


def test_strip_html_hardening():
    """Script/style contents are dropped and markup edge cases are handled."""
    assert _strip_html('<script src="x.js">secret()</script>visible') == "visible"
    assert _strip_html("<style>.a{color:red}</style>styled") == "styled"
    assert _strip_html('<img alt="a > b">text') == "text"
    assert _strip_html("<p>foo</p><p>bar</p>") == "foo bar"
    assert _strip_html("see https://example.com <!-- hidden -->") == "see https://example.com"
    assert _strip_html(None) == ""
