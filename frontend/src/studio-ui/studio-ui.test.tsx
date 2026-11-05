import {
  beforeEach, describe, expect, it, vi,
} from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import React from 'react';
import StudioUi from './studio-ui';

const jqueryMock = {
  post: vi.fn(() => ({
    done: vi.fn((callback) => {
      callback();
      return { fail: vi.fn() };
    }),
  })),
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
    initialDisplayName: 'Accordion',
    initialPanels: [],
    initialStyling: {},
    initialDescription: '',
    studioSaveUrl,
    runtime: { notify: mockNotify, handlerUrl: vi.fn() },
    element: document.createElement('div'),
    config: { json_editing_enabled: true },
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderStudioUi = (props: Partial<typeof studioUiProps> = {}) => render(
    <IntlProvider locale="en">
      <StudioUi {...studioUiProps} {...props} />
    </IntlProvider>,
  );

  it('switches between the Content and Settings tabs', async () => {
    renderStudioUi();

    expect(screen.getByText('Description')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: /Settings/i }));
    expect(screen.getByText('Styling of Accordions')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: /Content/i }));
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('shows the JSON editor tab', async () => {
    renderStudioUi();

    await userEvent.click(screen.getByRole('tab', { name: /JSON/i }));
    expect(screen.getByText('Update Component using JSON file')).toBeInTheDocument();
  });

  it('runs onSave when clicking Save', async () => {
    renderStudioUi();
    await userEvent.click(screen.getByRole('button', { name: /Save/i }));
    expect(mockNotify)
      .toHaveBeenCalledTimes(2);
    expect(mockNotify)
      .toHaveBeenCalledWith('save', { state: 'start' });
    expect(mockNotify)
      .toHaveBeenCalledWith('save', { state: 'end' });
    expect(jqueryMock.post).toHaveBeenCalledWith(studioSaveUrl, JSON.stringify({
      display_name: 'Accordion',
      styling: {},
      panels: [],
      description: '',
    }));
  });

  it('runs onCancel when clicking Cancel', async () => {
    renderStudioUi();
    await userEvent.click(screen.getByRole('button', { name: /Cancel/i }));
    expect(mockNotify)
      .toHaveBeenCalledWith('cancel', {});
  });

  it('saves the description', async () => {
    renderStudioUi({ initialDescription: '<p>Intro</p>' });
    await userEvent.click(screen.getByRole('button', { name: /Save/i }));
    expect(jqueryMock.post).toHaveBeenCalledWith(studioSaveUrl, JSON.stringify({
      display_name: 'Accordion',
      styling: {},
      panels: [],
      description: '<p>Intro</p>',
    }));
  });
});
