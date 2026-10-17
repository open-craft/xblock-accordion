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
import UnfoldLess from '@openedx/paragon/icons/es5/UnfoldLess';
import UnfoldMore from '@openedx/paragon/icons/es5/UnfoldMore';

interface StudentUiProps {
  panels: Panel[],
  styling: PanelStyling,
  description: string,
}

function StudentUi({ panels: rawPanels, styling, description }: StudentUiProps) {
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
      {/* eslint-disable-next-line react/no-danger */}
      {description.trim() !== '' && <div className="accordion-description" dangerouslySetInnerHTML={{ __html: description }} />}
      <div className="accordion-toolbar">
        <Button
          variant="link"
          className="accordion-toggle"
          iconAfter={allExpanded ? UnfoldLess : UnfoldMore}
          onClick={() => toggleAll()}
        >
          {allExpanded
            ? 'Collapse all'
            : 'Expand all'}
        </Button>
      </div>
      <div
        className="accordion-panels"
        // Author styling is applied inline, so the design tokens in style.scss
        // remain the defaults whenever the author has not set a value.
        style={{ borderColor: styling?.borderColor }}
      >
        {panels.map((panel, idx) => (
          <CollapsibleAdvanced
            className={`collapsible-card${panel?.expanded ? ' is-open' : ''}`}
            open={panel?.expanded}
            onToggle={() => togglePanel(idx)}
            key={`${panel.title}-${idx}`} // eslint-disable-line react/no-array-index-key
          >
            <CollapsibleTrigger
              className="collapsible-trigger"
              style={{
                backgroundColor: styling?.backgroundColor,
                color: styling?.textColor,
                fontSize: styling?.fontSize,
              }}
            >
              <CollapsibleVisible whenClosed><Icon src={Add} /></CollapsibleVisible>
              <CollapsibleVisible whenOpen><Icon src={Remove} /></CollapsibleVisible>
              <span className="accordion-title">{panel.title}</span>
            </CollapsibleTrigger>

            <CollapsibleBody className="collapsible-body">
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{ __html: panel.contents }} />
            </CollapsibleBody>
          </CollapsibleAdvanced>
        ))}
      </div>
    </div>
  );
}

export default StudentUi;
