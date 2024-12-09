import {
  describe, expect, it, vi,
} from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import StudioUi from './studio-ui';

const jqueryMock = {
  post: vi.fn(),
};
vi.stubGlobal('$', jqueryMock);
vi.mock('./TinyMceEditor', () => ({
  __esModule: true,
  default: () => 'TiNYmCE EDitOR',
}));

describe('StudioUi component test', () => {
  const mockNotify = vi.fn();
  const studioSaveUrl = '/save/url';
  const studioUiProps = {
    initialPanels: [],
    initialStyling: {},
    studioSaveUrl,
    runtime: { notify: mockNotify, handlerUrl: vi.fn() },
  };

  it('switches between StylingPage and EditingPage', async () => {
    render(<StudioUi {...studioUiProps} />);
    await userEvent.click(screen.getByRole('link', { name: /Continue/i }));
    expect(screen.getByRole('link', { name: /Back/i }))
      .toBeInTheDocument();
    await userEvent.click(screen.getByRole('link', { name: /Back/i }));
  });

  it('runs onSave when clicking Save', async () => {
    render(<StudioUi {...studioUiProps} />);
    await userEvent.click(screen.getByRole('link', { name: /Save/i }));
    expect(mockNotify)
      .toHaveBeenCalledTimes(2);
    expect(mockNotify)
      .toHaveBeenCalledWith('save', { state: 'start' });
    expect(mockNotify)
      .toHaveBeenCalledWith('save', { state: 'end' });
    expect(jqueryMock.post).toHaveBeenCalledWith(studioSaveUrl, JSON.stringify({
      styling: {},
      panels: [],
    }));
  });

  it('runs onCancel when clicking Cancel', async () => {
    render(<StudioUi {...studioUiProps} />);
    await userEvent.click(screen.getByRole('link', { name: /Cancel/i }));
    expect(mockNotify)
      .toHaveBeenCalledWith('cancel', {});
  });
});
