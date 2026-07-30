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

type XBlockElementLike = Element | { readonly 0: Element; readonly jquery: string };

interface XBlockRuntime {
  handlerUrl: (element: XBlockElementLike | null, action: string) => string
  notify: (action: string, data: object) => void
}

interface XBlockData {
  panels: Panel[],
  styling: PanelStyling,
}
