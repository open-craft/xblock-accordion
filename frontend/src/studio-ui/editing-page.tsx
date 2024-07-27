import * as React from 'react';
import {
  Button, FormControl, FormGroup, FormLabel,
} from '@openedx/paragon';
import { Plus } from '@openedx/paragon/icons';
import TinyMceEditor from './TinyMceEditor';

interface EditingPageProps {
  panels: Panel[]
  setPanels: (val: Panel[]) => void
}

function EditingPage({ panels, setPanels }: EditingPageProps) {
  const [selectedPanel, setSelectedPanel] = React.useState<number | null>(0);
  const addNewPanel = () => {
    setPanels([...panels, { title: null, contents: '' }]);
    setSelectedPanel(panels.length);
  };
  const updatePanel = (idx: number, change: Partial<Panel>) => {
    const newPanels = [...panels];
    Object.assign(newPanels[idx], change);
    setPanels(newPanels);
  };
  return (
    <>
      <div className="d-flex justify-content-end">
        <Button iconBefore={Plus} onClick={addNewPanel}>Add Accordion</Button>
      </div>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column mr-2" style={{ flexGrow: 1, width: '25%' }}>
          {panels.map((panel, idx) => (
            <Button
              className="justify-content-start"
              key={`${panel.title}-${idx}`} // eslint-disable-line react/no-array-index-key
              variant={selectedPanel === idx ? 'light' : 'outline'}
              onClick={() => setSelectedPanel(idx)}
            >
              {panel.title || 'Untitled accordion item'}
            </Button>
          ))}
        </div>
        <div className="d-flex flex-column" style={{ flexGrow: 3 }}>
          {selectedPanel !== null && panels[selectedPanel] && (
          <>
            <FormGroup>
              <FormLabel>Title</FormLabel>
              <FormControl
                controlClassName="px-2 py-0"
                size="sm"
                value={panels[selectedPanel].title || ''}
                onChange={(e) => updatePanel(selectedPanel, { title: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Content</FormLabel>
              <TinyMceEditor
                value={panels[selectedPanel].contents}
                onChange={(val) => updatePanel(selectedPanel, { contents: val })}
              />
            </FormGroup>
          </>
          )}
        </div>
      </div>
    </>
  );
}

export default EditingPage;
