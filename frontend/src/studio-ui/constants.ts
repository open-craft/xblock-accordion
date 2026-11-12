export interface StudioTab {
  key: string;
  label: string;
}

export const EDITOR_TABS: StudioTab[] = [
  { key: 'content', label: 'Content' },
  { key: 'settings', label: 'Settings' },
  { key: 'json', label: 'JSON' },
];
