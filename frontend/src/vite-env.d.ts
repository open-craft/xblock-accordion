/// <reference types="vite/client" />
declare let $: JQueryStatic;

type Panel = {
  title: string | null; contents: string; expanded?: boolean;
};

type PanelStyling = {
  fontSize?: string,
  backgroundColor?: string,
  textColor?: string,
  borderColor?: string,
};

interface XBlockRuntime {
  handlerUrl: (element: Element | null, action: string) => string
  notify: (action: string, data: object) => void
}

interface XBlockData {
  panels: Panel[],
  styling: PanelStyling,
}
