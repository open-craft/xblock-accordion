import * as React from 'react';
import { useMemo, useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Icon from '@openedx/paragon/dist/Icon';
import CollapsibleAdvanced from '@openedx/paragon/dist/Collapsible/CollapsibleAdvanced';
import CollapsibleTrigger from '@openedx/paragon/dist/Collapsible/CollapsibleTrigger';
import CollapsibleBody from '@openedx/paragon/dist/Collapsible/CollapsibleBody';
import CollapsibleVisible from '@openedx/paragon/dist/Collapsible/CollapsibleVisible';
import Add from '@openedx/paragon/icons/es5/Add';
import Remove from '@openedx/paragon/icons/es5/Remove';

interface StudentUiProps {
  panels: Panel[],
  styling: PanelStyling,
  description?: string,
}

interface DescriptionProps {
  html: string,
}

/**
 * The description is authored as HTML in Studio and sanitised server-side in the
 * XBlock's ``student_view`` before it is handed to the block.
 */
function Description({ html }: DescriptionProps) {
  return (
    // eslint-disable-next-line react/no-danger
    <div className="accordion-description" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

function StudentUi({ panels: rawPanels, styling, description = '' }: StudentUiProps) {
  const [panels, setPanels] = useState(rawPanels);
  const togglePanel = (index: number) => {
    const newPanels = [...panels];
    newPanels[index] = { ...newPanels[index], expanded: !panels[index].expanded };
    setPanels(newPanels);
  };
  const allExpanded = useMemo(
    () => panels.every((panel) => panel.expanded),
    [panels],
  );
  const toggleAll = () => setPanels(panels.map((panel) => ({ ...panel, expanded: !allExpanded })));

  return (
    <div className="xblock-accordion">
      {description.trim() !== '' && <Description html={description} />}
      <div className="d-flex justify-content-end mb-2">
        <Button variant="outline-primary" size="sm" onClick={() => toggleAll()}>
          {allExpanded
            ? 'Collapse all'
            : 'Expand all'}
        </Button>
      </div>
      {panels.map((panel, idx) => (
        <CollapsibleAdvanced
          className="collapsible-card rounded-0 mb-2"
          open={panel?.expanded}
          onToggle={() => togglePanel(idx)}
          style={{
            borderColor: styling?.borderColor,
          }}
          key={`${panel.title}-${idx}`} // eslint-disable-line react/no-array-index-key
        >
          <CollapsibleTrigger
            className="collapsible-trigger rounded-0 px-3 py-2"
            style={{
              backgroundColor: styling?.backgroundColor,
              color: styling?.textColor,
              fontSize: styling?.fontSize,
            }}
          >
            <CollapsibleVisible whenClosed><Icon src={Add} /></CollapsibleVisible>
            <CollapsibleVisible whenOpen><Icon src={Remove} /></CollapsibleVisible>
            <span className="flex-grow-1 my-0">{panel.title}</span>
          </CollapsibleTrigger>

          <CollapsibleBody className="collapsible-body">
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: panel.contents }} />
          </CollapsibleBody>
        </CollapsibleAdvanced>
      ))}
    </div>
  );
}

export default StudentUi;
