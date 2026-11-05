import React, { useState } from 'react';
import {
  ActionRow, Form, Icon, IconButton, Nav, ModalDialog,
} from '@openedx/paragon';
import { EditOutline } from '@openedx/paragon/icons';
import { type StudioTab } from '../constants';

export interface HeaderProps {
  /** Current component name, rendered as the editable heading. */
  title: string;
  /** Called with the updated name whenever the user edits the title. */
  onTitleChange: (title: string) => void;
  /** Key of the currently active tab. */
  activeTab: string;
  /** Tabs to render in the navigation, in display order. */
  tabs: StudioTab[];
}

export default function Header({
  title,
  onTitleChange,
  activeTab,
  tabs,
}: HeaderProps) {
  const [isEditingName, setIsEditingName] = useState(false);

  return (
    <ModalDialog.Header className="shadow-sm studio-header">
      <div className="d-flex flex-row justify-content-between">
        <ActionRow>
          {isEditingName ? (
            <Form.Control
              type="text"
              name="studio-title"
              aria-label="Display name"
              value={title}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => onTitleChange(event.target.value)}
              onBlur={() => setIsEditingName(false)}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === 'Escape') {
                  setIsEditingName(false);
                  e.preventDefault();
                }
              }}
            />
          ) : (
            <h3 className="h3 col pl-0">
              <div className="d-flex flex-row align-items-center mt-1">
                Editing: {title || '<Untitled>'}
                <IconButton
                  alt="Edit display name"
                  className="studio-header-title-edit"
                  size="sm"
                  iconAs={Icon}
                  src={EditOutline}
                  onClick={() => setIsEditingName(true)}
                />
              </div>
            </h3>
          )}
        </ActionRow>
        <ActionRow.Spacer />
        <Nav
          role="tablist"
          variant="button-group"
          activeKey={activeTab}
          className="studio-header-tabs-nav pgn__tabs"
          aria-label="Editor Sections"
        >
          {tabs.map(({ key, label }) => (
            <Nav.Link
              key={key}
              as="button"
              type="button"
              eventKey={key}
              tabIndex={activeTab === key ? 0 : -1}
            >
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </div>
    </ModalDialog.Header>
  );
}
