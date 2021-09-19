import classNames from 'classnames';
import { Editor as RichEditor } from '@tinymce/tinymce-react';
import { useController } from 'react-hook-form';
import './index.scss';
// TODO: move to env file
const API_KEY = 'mtyjtpq9pjtk0qt01s6jkhvzivpqkc215377dqkhuevc297n';
const PLUGINS = [];
const TOOLBAR = 'undo redo | bold italic underline';

// const STATES = { ERROR: 'error', BASE: 'base' };

// TODO: APPEND STYLING

// const DEFAULT_CLASSES = 'min-h-200px bg-white outline-none';

// const STATE_CLASSES = {
//   [STATES.ERROR]: 'border-danger',
//   [STATES.BASE]: 'border-grey-dark focus:border-blue-light',
// };

const Editor = (props) => {
  const { error, className, showError = true, placeholder, name, ...editorProps } = props;
  const {
    field: { onChange, ...fieldProps },
  } = useController({ control: props.control, name });
  // const stateClasses = error ? STATE_CLASSES[STATES.ERROR] : STATE_CLASSES[STATES.BASE];

  return (
    <RichEditor
      className='abcas -----------------'
      // className={classNames(DEFAULT_CLASSES, stateClasses, className)}
      apiKey={API_KEY}
      init={{ menubar: false, plugins: PLUGINS, toolbar: TOOLBAR }}
      outputFormat='html'
      onEditorChange={onChange}
      {...editorProps}
      {...fieldProps}
    />
  );
};

export default Editor;
