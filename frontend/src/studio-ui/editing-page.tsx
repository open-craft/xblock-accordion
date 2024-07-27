import * as React from 'react';
import { Button } from '@openedx/paragon';
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
      <div className="d-flex flex-row mx-2">
        <div className="d-flex flex-column mr-2" style={{ flexGrow: 1, width: '25%' }}>
          {panels.map((panel, idx) => (
            <Button
              className="justify-content-start font-weight-bold p-2 rounded-0"
              key={`${panel.title}-${idx}`} // eslint-disable-line react/no-array-index-key
              variant={selectedPanel === idx ? 'light' : 'outline'}
              onClick={() => setSelectedPanel(idx)}
              size="lg"
            >
              {panel.title || 'Untitled accordion item'}
            </Button>
          ))}
        </div>
        <div className="d-flex flex-column" style={{ flexGrow: 3 }}>
          {selectedPanel !== null && panels[selectedPanel] && (
          <>
            <div className="mb-2 d-flex flex-column">
              <label className="mb-2" htmlFor="accordion-title">Title</label>
              <input
                id="accordion-title"
                className="px-2 py-0"
                value={panels[selectedPanel].title || ''}
                onChange={(e) => updatePanel(selectedPanel, { title: e.target.value })}
              />
            </div>
            <div>
              <span className="mb-2">Content</span>
              <TinyMceEditor
                value={panels[selectedPanel].contents}
                onChange={(val) => updatePanel(selectedPanel, { contents: val })}
              />
            </div>
          </>
          )}
        </div>
      </div>
    </>
  );
}

export default EditingPage;
