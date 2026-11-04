import * as React from 'react';
import {
  Button, ModalDialog, Stack, TabContainer, TabContent, TabPane,
} from '@openedx/paragon';
import StylingPage from './styling-page';
import EditingPage from './editing-page';
import Header from './components/Header';
import { EDITOR_TABS } from './constants';

interface StudioUiProps {
  initialPanels: Panel[]
  initialStyling: PanelStyling
  initialDescription: string
  studioSaveUrl: string
  runtime: XBlockRuntime
}

export default function StudioUi({
  initialPanels, initialStyling, initialDescription, studioSaveUrl, runtime,
}: StudioUiProps) {
  const [styling, setStyling] = React.useState(initialStyling);
  const [panels, setPanels] = React.useState(initialPanels);
  const [description, setDescription] = React.useState(initialDescription);
  const defaultTab = EDITOR_TABS[0].key;
  const [activeTab, setActiveTab] = React.useState(defaultTab);

  const handleSave = () => {
    runtime.notify('save', { state: 'start' });
    $.post(studioSaveUrl, JSON.stringify({ styling, panels, description }))
      .done(() => {
        runtime.notify('save', { state: 'end' });
      })
      .fail(() => {
        runtime.notify('error', { title: 'Save Error', message: 'Failed to save accordion configuration' });
      });
  };

  return (
    <div className="xblock-accordion xblock-accordion-editor">
      <TabContainer
        id="accordion-block-editor-tabs"
        activeKey={activeTab}
        onSelect={(eventKey: string | null) => setActiveTab(eventKey || defaultTab)}
        transition={false}
      >
        <div className="accordion-studio">
          <Header
            title="Accordion"
            onTitleChange={() => {}}
            tabs={EDITOR_TABS}
            activeTab={activeTab}
          />

          <ModalDialog.Body>
            <TabContent className="accordion-studio-tab-content">
              <TabPane eventKey="content">
                <EditingPage
                  panels={panels}
                  setPanels={setPanels}
                  description={description}
                  setDescription={setDescription}
                />
              </TabPane>
              <TabPane eventKey="settings">
                <StylingPage styling={styling} setStyling={setStyling} />
              </TabPane>
              <TabPane>
                <div>JSON Editor</div>
              </TabPane>
            </TabContent>
          </ModalDialog.Body>

          <ModalDialog.Footer className="border-top" style={{ zIndex: '3' }}>
            <Stack direction="horizontal" gap={4}>
              <Button
                variant="light"
                className="action-button"
                onClick={() => runtime.notify('cancel', {})}
                type="button"
              >
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSave} className="save-button">
                Save
              </Button>
            </Stack>
          </ModalDialog.Footer>
        </div>
      </TabContainer>
    </div>
  );
}
