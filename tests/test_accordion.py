"""
Tests for AccordionXBlock
"""

import json
from types import SimpleNamespace

from django.test import TestCase
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from accordion import AccordionXBlock
from accordion.accordion import _strip_html


def _new_block():
    """Build an AccordionXBlock backed by the toy runtime."""
    return AccordionXBlock(ToyRuntime(), scope_ids=ScopeIds("1", "2", "3", "4"))


def _post_request(payload):
    """Minimal stand-in for the POST request that XBlock.json_handler expects."""
    return SimpleNamespace(method="POST", body=json.dumps(payload).encode("utf-8"))


def _studio_save(block, payload):
    """Call studio_save through its json_handler wrapper and return the response body."""
    return json.loads(block.studio_save(_post_request(payload)).text)


def test_student_view_json_data():
    """Test the data structure returned by student_view."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    block = AccordionXBlock(ToyRuntime(), scope_ids=scope_ids)
    frag = block.student_view()
    as_dict = frag.to_dict()
    assert "panels" in as_dict["json_init_args"]
    assert "styling" in as_dict["json_init_args"]
    assert "description" in as_dict["json_init_args"]
    assert "url" in as_dict["json_init_args"]


def test_studio_view_json_data():
    """Test the data structure returned by studio_view."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    block = AccordionXBlock(ToyRuntime(), scope_ids=scope_ids)
    frag = block.studio_view()
    as_dict = frag.to_dict()
    assert "panels" in as_dict["json_init_args"]
    assert "styling" in as_dict["json_init_args"]
    assert "description" in as_dict["json_init_args"]
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


def test_description_defaults_to_empty():
    """Blocks saved before the description existed still render an empty description."""
    block = _new_block()

    assert block.description == ""
    assert block.student_view().to_dict()["json_init_args"]["description"] == ""


def test_student_view_sanitizes_description():
    """Only allowlisted markup in the description reaches the student view."""
    block = _new_block()
    block.description = (
        "<h3>Intro</h3>"
        "<p>Some <strong>bold</strong> and <em>italic</em> text.</p>"
        "<script>alert(1)</script>"
        '<img src="x" onerror="alert(1)">'
        '<span style="color: #ff0000">red</span>'
    )

    description = block.student_view().to_dict()["json_init_args"]["description"]

    assert "<h3>Intro</h3>" in description
    assert "<strong>bold</strong>" in description
    assert "<em>italic</em>" in description
    assert "<script" not in description
    assert "alert(1)" not in description
    assert "<img" not in description
    assert "onerror" not in description
    assert "style" not in description


def test_studio_view_keeps_the_raw_description():
    """The editor gets the authored markup back so that it round-trips unchanged."""
    block = _new_block()
    raw = '<p>Keep <span style="color: #ff0000">this</span></p>'
    block.description = raw

    assert block.studio_view().to_dict()["json_init_args"]["description"] == raw


def test_studio_save_stores_the_description():
    """studio_save persists the description sent by the editor."""
    block = _new_block()

    assert _studio_save(block, {"description": "<p>New</p>"}) == {"result": "success"}
    assert block.description == "<p>New</p>"


def test_studio_save_clears_the_description():
    """An explicit empty description clears it, so the field can be removed again."""
    block = _new_block()
    block.description = "<p>Old</p>"

    _studio_save(block, {"description": ""})

    assert block.description == ""


def test_studio_save_without_a_description_leaves_it_alone():
    """A payload without the key (eg. an older editor) must not wipe the description."""
    block = _new_block()
    block.description = "<p>Keep me</p>"

    _studio_save(block, {"panels": []})

    assert block.description == "<p>Keep me</p>"


def test_saved_description_round_trips():
    """A saved description comes back unmodified in Studio and sanitised for learners."""
    block = _new_block()
    authored = '<h3>Intro</h3><p>Some <em>text</em></p><script>alert(1)</script>'

    _studio_save(block, {"description": authored})

    # Studio gets the authored markup back, so the editor does not mangle it.
    assert block.studio_view().to_dict()["json_init_args"]["description"] == authored
    # Students only get the sanitised subset of it.
    assert block.student_view().to_dict()["json_init_args"]["description"] == (
        "<h3>Intro</h3><p>Some <em>text</em></p>"
    )
