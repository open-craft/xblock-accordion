import * as React from 'react';
import { Button } from '@openedx/paragon';
import { Plus } from '@openedx/paragon/icons';
import TinyMceEditor from './TinyMceEditor';

interface EditingPageProps {
  panels: Panel[]
  setPanels: (val: Panel[]) => void
  description: string
  setDescription: (val: string) => void
}

// The description is sanitised server-side down to exactly these tags, so the
// editor offers only these formats and none of the media/link/table controls.
const DESCRIPTION_ID = 'accordion-description';
const DESCRIPTION_PLUGINS = ['autolink'];
const DESCRIPTION_TOOLBAR = ['undo redo | bold italic | blocks | removeformat'];
const DESCRIPTION_BLOCK_FORMATS = 'Paragraph=p; Heading 3=h3; Heading 4=h4';

function EditingPage({
  panels, setPanels, description, setDescription,
}: EditingPageProps) {
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
  // reorder panels by dragging
  const movePanel = (from: number, to: number) => {
    const newPanels = [...panels];
    const [moved] = newPanels.splice(from, 1);
    newPanels.splice(to, 0, moved);
    setPanels(newPanels);
    setSelectedPanel(to);
  };
  // remove a panel by index
  const deletePanel = (idx: number) => {
    const newPanels = panels.filter((_, i) => i !== idx);
    setPanels(newPanels);
    // adjust selected panel: choose next or previous
    if (newPanels.length === 0) {
      setSelectedPanel(null);
    } else if (idx >= newPanels.length) {
      setSelectedPanel(newPanels.length - 1);
    } else {
      setSelectedPanel(idx);
    }
  };
  return (
    <>
      <div className="d-flex flex-column mb-2">
        <label className="mb-2" htmlFor={DESCRIPTION_ID}>Description</label>
        <TinyMceEditor
          id={DESCRIPTION_ID}
          value={description}
          onChange={setDescription}
          plugins={DESCRIPTION_PLUGINS}
          toolbar={DESCRIPTION_TOOLBAR}
          blockFormats={DESCRIPTION_BLOCK_FORMATS}
          height="200px"
        />
      </div>
      <div className="d-flex justify-content-end">
        <Button iconBefore={Plus} onClick={addNewPanel}>Add Accordion</Button>
      </div>
      <div className="d-flex flex-row mx-2">
        <div className="d-flex flex-column mr-2" style={{ flexGrow: 1, width: '25%' }}>
          {panels.map((panel, idx) => (
            <Button
              draggable
              onDragStart={e => {
                e.dataTransfer.setData('text/plain', String(idx));
                e.dataTransfer.effectAllowed = 'move';
              }}
              onDragOver={e => {
                e.preventDefault();
              }}
              onDrop={e => {
                e.preventDefault();
                const from = parseInt(e.dataTransfer.getData('text/plain'), 10);
                movePanel(from, idx);
              }}
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
            <div className="mt-3">
              <Button
                variant="danger"
                onClick={() => deletePanel(selectedPanel)}
              >
                Delete
              </Button>
            </div>
          </>
          )}
        </div>
      </div>
    </>
  );
}

export default EditingPage;
