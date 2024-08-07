import React from 'react';
import {
  describe, expect, test, vi,
} from 'vitest';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import EditingPage from './editing-page';

vi.mock('./TinyMceEditor', () => ({
  __esModule: true,
  default: () => 'TiNYmCE EDitOR',
}));

describe('EditingPage', () => {
  test('Add a new accordion panel', async () => {
    const user = userEvent.setup();
    const setPanels = vi.fn();
    const panels = [];
    render(<EditingPage panels={panels} setPanels={setPanels} />);
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
    render(<EditingPage panels={panels} setPanels={setPanels} />);

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
});
