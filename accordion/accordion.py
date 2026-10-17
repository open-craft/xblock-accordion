"""
An XBlock for creating and accordion component with multiple panels with rich content.
"""

import html

import nh3
from django.utils import translation
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import Dict, List, Scope, String

try:
    import importlib_resources
except ImportError:  # pragma: no cover
    from importlib import resources as importlib_resources


def _strip_html(text):
    """Reduce HTML to searchable plain text; script/style contents are dropped."""
    text = (text or "").replace("<", " <")
    return " ".join(html.unescape(nh3.clean(text, tags=set())).split())


# The description is authored in TinyMCE, so its markup is sanitised when it is
# saved: storage and the student view both only see allowlisted markup. The
# allowlist is deliberately narrow (an accordion description is introductory copy)
# and is mirrored by the Studio editor, which only offers these formats and no
# media/link/table controls.
#
# Values written outside studio_save - an OLX import, a content-library copy, or a
# direct field assignment - bypass this and are trusted as-is.

_DESCRIPTION_TAGS = {"p", "strong", "em", "h3", "h4", "br"}
_DESCRIPTION_ATTRIBUTES = {}


def _sanitize_description(text):
    """Sanitize author-provided description markup before it is stored."""
    return nh3.clean(
        text or "",
        tags=_DESCRIPTION_TAGS,
        attributes=_DESCRIPTION_ATTRIBUTES,
    )


class AccordionXBlock(XBlock):
    """
    Accordion XBlock.
    """

    display_name = String(default=translation.gettext_noop("Accordion"))
    panels = List(help="Accordion entries", default=[], scope=Scope.content)
    styling = Dict(help="Accordion styling", default={}, scope=Scope.content)
    border_style = String(
        help="Accordion border style", default="", scope=Scope.content
    )
    description = String(
        help="Rich text description shown above the accordion entries",
        default="",
        scope=Scope.content,
    )

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = importlib_resources.files("accordion").joinpath(path).read_text("utf8")
        return data

    def student_view(self, context=None):  # pylint: disable=unused-argument
        """
        Create primary view of the AccordionXBlock, shown to students when viewing courses.
        """
        frag = Fragment()
        frag.add_javascript(self.resource_string("static/student.js"))
        frag.add_css_url(self.runtime.local_resource_url(self, "public/student-ui.css"))
        frag.initialize_js(
            "AccordionBlock",
            {
                "url": self.runtime.local_resource_url(self, "public/student-ui.js"),
                "panels": self.panels,
                "styling": self.styling,
                "description": self.description,
            },
        )
        return frag

    @XBlock.json_handler
    def studio_save(
        self, data, suffix=""
    ):  # pragma: no cover pylint: disable=unused-argument
        """Save config and data based on data received at this API endpoint."""
        panels = data.get("panels", None)
        styling = data.get("styling", None)
        description = data.get("description", None)
        if panels:
            self.panels = panels
        if styling:
            self.styling = styling
        if description:
            # Sanitise at rest so storage only ever holds allowlisted markup; the
            # render pass in student_view still covers legacy or imported values.
            self.description = _sanitize_description(description)
        elif "description" in data:
            # An explicit empty (or null) value clears the description. TinyMCE
            # sends "" when an author empties the field, which the truthiness
            # check above would otherwise skip and silently discard the edit.
            self.description = ""
        return {"result": "success"}

    def studio_view(self, context=None):  # pylint: disable=unused-argument
        """
        Create primary view of the AccordionXBlock, shown to students when viewing courses.
        """
        editor_html = self.resource_string("static/html/accordion.html")
        frag = Fragment(editor_html)
        frag.add_javascript(self.resource_string("static/studio.js"))
        frag.add_css_url(self.runtime.local_resource_url(self, "public/studio-ui.css"))
        frag.initialize_js(
            "AccordionEditor",
            {
                "url": self.runtime.local_resource_url(self, "public/studio-ui.js"),
                "panels": self.panels,
                "styling": self.styling,
                "description": self.description,
            },
        )
        return frag

    def index_dictionary(self):
        """
        Return dictionary prepared with block content and type for indexing.
        """
        xblock_body = super().index_dictionary()
        parts = []
        for panel in self.panels or []:
            if not isinstance(panel, dict):
                continue
            if panel.get("title"):
                parts.append(str(panel["title"]))
            if panel.get("contents"):
                parts.append(_strip_html(str(panel["contents"])))
        index_body = {
            "display_name": self.display_name,
            "accordion_content": " ".join(parts).strip(),
        }
        if "content" in xblock_body:
            xblock_body["content"].update(index_body)
        else:
            xblock_body["content"] = index_body
        xblock_body["content_type"] = "Accordion"
        return xblock_body

    @staticmethod
    def workbench_scenarios():  # pragma: no cover
        """Create canned scenario for display in the workbench."""
        return [
            (
                "AccordionXBlock",
                """<accordion/>
             """,
            ),
            (
                "Multiple AccordionXBlock",
                """<vertical_demo>
                <accordion/>
                <accordion/>
                <accordion/>
                </vertical_demo>
             """,
            ),
        ]
