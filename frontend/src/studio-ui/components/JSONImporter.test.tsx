import {
  beforeEach, describe, expect, it, vi,
} from 'vitest';
import { fireEvent, render, waitFor } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import React from 'react';
import JSONImporter from './JSONImporter';

interface Deferred {
  resolveDone: () => void;
  rejectFail: (error: unknown) => void;
}

/**
 * Minimal stand-in for the jQuery `$.post` chain used by the component. It
 * records the callbacks so tests can resolve or reject the request manually.
 */
function stubJquery() {
  const deferreds: Deferred[] = [];
  const mockPost = vi.fn(() => {
    let doneCallback: (() => void) | undefined;
    let failCallback: ((error: unknown) => void) | undefined;
    const deferred: Deferred = {
      resolveDone: () => doneCallback?.(),
      rejectFail: (error) => failCallback?.(error),
    };
    deferreds.push(deferred);
    const chain = {
      done: vi.fn((callback: () => void) => {
        doneCallback = callback;
        return chain;
      }),
      fail: vi.fn((callback: (error: unknown) => void) => {
        failCallback = callback;
        return chain;
      }),
    };
    return chain;
  });
  vi.stubGlobal('$', { post: mockPost });
  return {
    mockPost,
    getLastDeferred: () => deferreds[deferreds.length - 1],
  };
}

interface RenderImporterResult extends RenderResult {
  runtime: XBlockRuntime;
}

function renderImporter({
  runtime = {
    notify: vi.fn(),
    handlerUrl: vi.fn(
      (_element: XBlockElementLike | null, handler: string) => `/handler/${handler}`,
    ),
  },
}: { runtime?: XBlockRuntime } = {}): RenderImporterResult {
  const result = render(
    <IntlProvider locale="en">
      <JSONImporter
        liveData={{ title: 'Hello' }}
        runtime={runtime}
        element={document.createElement('div')}
      />
    </IntlProvider>,
  );
  return { ...result, runtime };
}

function getFileInput(container: HTMLElement): HTMLInputElement {
  const input = container.querySelector<HTMLInputElement>('input[type="file"]');
  expect(input).not.toBeNull();
  return input as HTMLInputElement;
}

function jsonFile(contents: string, name = 'component.json'): File {
  const file = new File([contents], name, { type: 'application/json' });
  // jsdom's Blob/File does not implement `.text()`, which the component relies
  // on. Provide it so the upload path can read the file contents.
  Object.defineProperty(file, 'text', {
    value: () => Promise.resolve(contents),
  });
  return file;
}

async function uploadJson(container: HTMLElement, file: File) {
  fireEvent.change(getFileInput(container), { target: { files: [file] } });
}

describe('JSONImporter', () => {
  let mockPost: ReturnType<typeof vi.fn>;
  let getLastDeferred: () => Deferred | undefined;

  beforeEach(() => {
    vi.clearAllMocks();
    ({ mockPost, getLastDeferred } = stubJquery());
  });

  it('notifies save start and posts the file contents to the save url', async () => {
    const { container, runtime } = renderImporter();
    const data = JSON.stringify({ title: 'Hello' });

    await uploadJson(container, jsonFile(data));

    await waitFor(() => {
      expect(runtime.notify).toHaveBeenCalledWith('save', { state: 'start' });
    });
    expect(mockPost).toHaveBeenCalledWith('/handler/studio_save', data);
  });

  it('notifies save end when the request succeeds', async () => {
    const { container, runtime } = renderImporter();

    await uploadJson(container, jsonFile('{"title":"Hello"}'));
    await waitFor(() => expect(getLastDeferred()).toBeDefined());

    getLastDeferred()!.resolveDone();

    await waitFor(() => {
      expect(runtime.notify).toHaveBeenCalledWith('save', { state: 'end' });
    });
  });

  it('shows the invalid JSON message and does not post', async () => {
    const { container, findByText } = renderImporter();

    await uploadJson(container, jsonFile('{ not valid json'));

    expect(await findByText('Invalid JSON.')).toBeInTheDocument();
    expect(mockPost).not.toHaveBeenCalled();
  });
});
