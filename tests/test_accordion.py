"""
Tests for AccordionXBlock
"""

from django.test import TestCase
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from accordion import AccordionXBlock


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
