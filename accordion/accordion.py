"""
An XBlock for creating and accordion component with multiple panels with rich content.
"""
import logging
from collections import defaultdict
from importlib import resources as importlib_resources

from django.utils import translation
from pydantic import ValidationError
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.exceptions import JsonHandlerError
from xblock.fields import Dict, List, Scope, String

from .types import AccordionData, Panel
from .utils import loc_to_dot_sep, strip_html

logger = logging.getLogger(__name__)


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
        try:
            validated = AccordionData.model_validate(data)
        except ValidationError as e:
            logger.exception("Invalid data received from studio.")
            issues = defaultdict(list)
            for item in e.errors():
                issues[item["msg"]].append(loc_to_dot_sep(item["loc"]))
            raise JsonHandlerError(400, issues) from e

        self.panels = [p.model_dump() for p in validated.panels]
        self.styling = validated.styling
        self.description = validated.description
        self.border_style = validated.border_style
        return {"result": "success"}

    def studio_view(self, context=None):  # pylint: disable=unused-argument
        """
        Create primary view of the AccordionXBlock, shown to students when viewing courses.
        """
        editor_html = self.resource_string("static/html/accordion.html")
        frag = Fragment(editor_html)
        frag.add_javascript(self.resource_string("static/studio.js"))
        frag.add_css(self.resource_string("static/css/studio.css"))
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
        parts = [strip_html(self.description)]
        for panel in self.panels:
            try:
                validated = Panel.model_validate(panel)
            except ValidationError:
                logger.warning(
                    "Skipping malformed panel while indexing block %s",
                    self.scope_ids.usage_id
                )
                continue
            parts.append(validated.searchable_text())

        index_body = {
            "display_name": self.display_name,
            "accordion_content": strip_html(" ".join(parts).strip()),
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
