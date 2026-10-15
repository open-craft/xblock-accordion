import React from 'react';
import {
  beforeEach, describe, expect, test, vi,
} from 'vitest';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import EditingPage from './editing-page';
import TinyMceEditor from './TinyMceEditor';

vi.mock('./TinyMceEditor', () => ({
  __esModule: true,
  default: vi.fn(() => 'TiNYmCE EDitOR'),
}));

const mockedEditor = vi.mocked(TinyMceEditor);

beforeEach(() => {
  vi.clearAllMocks();
});

/** Props of the description editor, ie. the TinyMCE instance for the description. */
const descriptionEditorProps = () => {
  const call = mockedEditor.mock.calls.find(
    ([props]) => props.id === 'accordion-description',
  );
  if (!call) {
    throw new Error('The description editor was not rendered');
  }
  return call[0];
};

describe('EditingPage', () => {
  test('Add a new accordion panel', async () => {
    const user = userEvent.setup();
    const setPanels = vi.fn();
    const panels = [];
    render(
      <EditingPage
        panels={panels}
        setPanels={setPanels}
        description=""
        setDescription={vi.fn()}
      />,
    );
    await user.click(screen.getByText(/Add Accordion/i));
    expect(setPanels)
      .toHaveBeenCalledTimes(1);
  });

  test('Update panel title', async () => {
    const setPanels = vi.fn();
    const panels = [{
      title: 'Panel 1',
      contents: '',
    }];
    render(
      <EditingPage
        panels={panels}
        setPanels={setPanels}
        description=""
        setDescription={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /Panel 1/i }));
    const titleInput = screen.getByRole('textbox', {
      name: /title/i,
    });
    fireEvent.input(titleInput, { target: { value: 'Updated Title' } });

    screen.logTestingPlaygroundURL();
    await waitFor(() => expect(setPanels)
      .toHaveBeenCalledWith(
        expect.arrayContaining([expect.objectContaining({ title: 'Updated Title' })]),
      ));
  });

  test('Renders a description editor limited to the sanitised formats', () => {
    render(
      <EditingPage
        panels={[]}
        setPanels={vi.fn()}
        description="<p>Intro</p>"
        setDescription={vi.fn()}
      />,
    );

    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(descriptionEditorProps()).toEqual(expect.objectContaining({
      value: '<p>Intro</p>',
      id: 'accordion-description',
      plugins: ['autolink'],
      toolbar: ['undo redo | bold italic | blocks | removeformat'],
      blockFormats: 'Paragraph=p; Heading 3=h3; Heading 4=h4',
    }));
  });

  test('Propagates description changes', () => {
    const setDescription = vi.fn();
    render(
      <EditingPage
        panels={[]}
        setPanels={vi.fn()}
        description="<p>Intro</p>"
        setDescription={setDescription}
      />,
    );

    descriptionEditorProps().onChange('<p>Updated</p>');

    expect(setDescription).toHaveBeenCalledWith('<p>Updated</p>');
  });
});
