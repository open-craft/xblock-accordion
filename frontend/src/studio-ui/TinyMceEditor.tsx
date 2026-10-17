import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

// TinyMCE so the global var exists
import 'tinymce/tinymce';
// DOM model
import 'tinymce/models/dom/model';
// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin';
// Content styles, including inline UI like fake cursors
import 'tinymce/skins/content/default/content';
import 'tinymce/skins/ui/oxide/content';

// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load
import 'tinymce/plugins/advlist';
// import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
// import 'tinymce/plugins/autoresize';
// import 'tinymce/plugins/autosave';
// import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
// import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
// import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/help/js/i18n/keynav/en';
import 'tinymce/plugins/image';
// import 'tinymce/plugins/importcss';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';

// importing plugin resources
// import 'tinymce/plugins/emoticons/js/emojis';

const DEFAULT_PLUGINS = [
  'advlist', 'autolink', 'lists', 'link', 'image',
  'searchreplace', 'visualblocks', 'code', 'fullscreen',
  'media', 'table', 'code', 'help',
];

const DEFAULT_TOOLBAR = [
  'undo redo | blocks | bold italic forecolor | alignleft aligncenter '
            + 'alignright alignjustify | bullist numlist outdent indent | ',
  'link unlink | image media | table | removeformat | code | fullscreen | help',
];

interface TinyMceEditorProps {
  value: string;
  onChange: (value: string) => void;
  /** DOM id, so a label elsewhere on the page can be associated with the editor. */
  id?: string;
  /** Overrides the default plugin set, eg. for an editor with a restricted toolbar. */
  plugins?: string[];
  /** Overrides the default toolbar. */
  toolbar?: string[];
  /** Restricts the block format dropdown, eg. to the formats a sanitizer allows. */
  blockFormats?: string;
  /** Set the height of the editor. Supports px, pt and em. Defaults to 400px. */
  height?: string;
}

function TinyMceEditor({
  value,
  onChange,
  id = undefined,
  plugins = DEFAULT_PLUGINS,
  toolbar = DEFAULT_TOOLBAR,
  blockFormats = undefined,
  height = '400px',
}: TinyMceEditorProps) {
  const init = {
    promotion: false,
    menubar: false,
    skin_url: 'default',
    plugins,
    toolbar,
    height,
    ...(blockFormats ? { block_formats: blockFormats } : {}),
  };
  return (
    <Editor
      licenseKey="gpl"
      id={id}
      value={value}
      onEditorChange={(newValue) => onChange(newValue)}
      init={init}
    />
  );
}

export default TinyMceEditor;
