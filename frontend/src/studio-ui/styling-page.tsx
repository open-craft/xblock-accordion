import * as React from 'react';
import {
  ColorPicker, FormControl, FormGroup, FormLabel,
} from '@openedx/paragon';

interface StylingPageProps {
  styling: PanelStyling
  setStyling: (param: PanelStyling) => void
}

interface ColorSelectorProps {
  label:string
  color: string | undefined
  setColor: (val:string) => void
  help: string
}

function ColorSelector({
  label, color, setColor, help,
}:ColorSelectorProps) {
  return (
    <div className="d-flex flex-column pb-3">
      <div className="d-flex align-items-center" data-testid={label}>
        <span className="mr-2">{label}</span>
        <ColorPicker
          size="sm"
          color={color}
          setColor={setColor}
        />
      </div>
      <span className="text-light-800 small mt-2">{help}</span>
    </div>
  );
}

export default function StylingPage({
  styling,
  setStyling,
}: StylingPageProps) {
  const updateStyling = (changes: Partial<PanelStyling>) => setStyling({ ...styling, ...changes });
  return (
    <div style={{ maxWidth: '800px' }}>
      <h3 className="mb-2">Styling of Accordions</h3>
      <FormGroup className="d-flex align-items-center py-2">
        <FormLabel isInline>Font size</FormLabel>
        <FormControl size="sm" controlClassName="px-2 py-0" className="flex-grow-0 p-0" value={styling.fontSize} onChange={(e) => updateStyling({ fontSize: e.target.value })} />
      </FormGroup>
      <ColorSelector
        label="Background color"
        help="Background color of accordion titles"
        color={styling.backgroundColor}
        setColor={(value) => updateStyling({ backgroundColor: value })}
      />
      <ColorSelector
        label="Border color"
        help="Border color of accordion titles"
        color={styling.borderColor}
        setColor={(value) => updateStyling({ borderColor: value })}
      />
      <ColorSelector
        label="Text color"
        help="Text color of accordion titles"
        color={styling.textColor}
        setColor={(value) => updateStyling({ textColor: value })}
      />
    </div>
  );
}
