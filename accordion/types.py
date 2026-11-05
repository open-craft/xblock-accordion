"""Pydantic models for data validation."""
from pydantic import BaseModel, field_validator

from .utils import sanitize_description


class Panel(BaseModel):
    """Content in each panel of the accordion."""

    title: str
    contents: str

    @field_validator("title", mode="before")
    @classmethod
    def remove_null_titles(cls, value: str | None) -> str:
        """Convert nulls in the title to emptry string for backward compatibility."""
        if value is None:
            return ""
        return value

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return " ".join([self.title, self.contents])


class AccordionData(BaseModel):
    """The complete data of the XBlock."""

    display_name: str = "Accordion"
    panels: list[Panel]
    description: str
    styling: dict[str, str]

    @field_validator("description", mode="after")
    @classmethod
    def clean_description(cls, value: str) -> str:
        """Sanitize the description's HTML once it is known to be a string."""
        return sanitize_description(value)
