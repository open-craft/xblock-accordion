"""
An XBlock for creating and accordion component with multiple panels with rich content.
"""

from django.utils import translation
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import Dict, List, Scope, String

try:
    import importlib_resources
except ImportError:  # pragma: no cover
    from importlib import resources as importlib_resources
try:
    from xmodule.edxnotes_utils import edxnotes
except ModuleNotFoundError:

    def edxnotes(func):  # noqa: D103
        return func


@XBlock.needs("user")
@edxnotes
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

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = importlib_resources.files("accordion").joinpath(path).read_text("utf8")
        return data

    def get_html(self):
        """
        This method returns the HTML generated for the LMS.

        This is specifically used to support edx-notes for Accordion XBlock,
        this provides an achor to be added to the HTML where the edx-notes HTML can be injected.
        """
        html = self.resource_string("static/html/accordion_student.html")
        return html

    def student_view(self, context=None):  # pylint: disable=unused-argument
        """
        Create primary view of the AccordionXBlock, shown to students when viewing courses.
        """
        frag = Fragment(self.get_html())
        frag.add_javascript(self.resource_string("static/student.js"))
        frag.add_css_url(self.runtime.local_resource_url(self, "public/student-ui.css"))
        frag.initialize_js(
            "AccordionBlock",
            {
                "url": self.runtime.local_resource_url(self, "public/student-ui.js"),
                "panels": self.panels,
                "styling": self.styling,
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
        if panels:
            self.panels = panels
        if styling:
            self.styling = styling
        return {"result": "success"}

    def studio_view(self, context=None):  # pylint: disable=unused-argument
        """
        Create primary view of the AccordionXBlock, shown to students when viewing courses.
        """
        html = self.resource_string("static/html/accordion.html")
        frag = Fragment(html)
        frag.add_javascript(self.resource_string("static/studio.js"))
        frag.add_css_url(self.runtime.local_resource_url(self, "public/studio-ui.css"))
        frag.initialize_js(
            "AccordionEditor",
            {
                "url": self.runtime.local_resource_url(self, "public/studio-ui.js"),
                "panels": self.panels,
                "styling": self.styling,
            },
        )
        return frag

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
