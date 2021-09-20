import { Editor as RichEditor } from '@tinymce/tinymce-react';
import { forwardRef } from 'react';
import { useController } from 'react-hook-form';
import './index.scss';

// TODO : add them colors to tinymce
// import resolveConfig from 'tailwindcss/resolveConfig';
// import tailwindConfig from '../../../../tailwind.config.js';
// const theme = resolveConfig(tailwindConfig);

// TODO: move to env file
const API_KEY = 'mtyjtpq9pjtk0qt01s6jkhvzivpqkc215377dqkhuevc297n';
const PLUGINS = ['textcolor'];
const TOOLBAR = 'undo redo | bold italic underline| forecolor ';
const TEXT_COLOR_MAP = ['red', 'Red'];

// const STATES = { ERROR: 'error', BASE: 'base' };

// TODO: APPEND STYLING

// const DEFAULT_CLASSES = 'min-h-200px bg-white outline-none';

// const STATE_CLASSES = {
//   [STATES.ERROR]: 'border-danger',
//   [STATES.BASE]: 'border-grey-dark focus:border-blue-light',
// };

const Editor = forwardRef((props, ref) => {
  const { error, className, showError = true, placeholder, name, ...editorProps } = props;
  const {
    field: { onChange, ...fieldProps },
  } = useController({ control: props.control, name });
  // const stateClasses = error ? STATE_CLASSES[STATES.ERROR] : STATE_CLASSES[STATES.BASE];

  return (
    <RichEditor
      ref={ref}
      // className={classNames(DEFAULT_CLASSES, stateClasses, className)}
      apiKey={API_KEY}
      init={{ menubar: false, placeholder, plugins: PLUGINS, toolbar: TOOLBAR, color_map: TEXT_COLOR_MAP }}
      outputFormat='html'
      onEditorChange={onChange}
      {...editorProps}
      {...fieldProps}
    />
  );
});

export default Editor;
