import classNames from 'classnames';
import Quill from 'quill';
import { useRef, useEffect } from 'react';
import { useController } from 'react-hook-form';
import 'quill/dist/quill.snow.css';
// import './index.scss';

const STATES = { ERROR: 'error', BASE: 'base' };

const DEFAULT_CLASSES = 'min-h-200px bg-white outline-none';

const STATE_CLASSES = {
  [STATES.ERROR]: 'border-danger',
  [STATES.BASE]: 'border-grey-dark focus:border-blue-light',
};

const Editor = (props) => {
  const editorRef = useRef(null);
  const { error, className, showError = true, placeholder, name, ...editorProps } = props;
  const { field } = useController({ control: props.control, name });
  useEffect(() => {
    const editor = new Quill(editorRef.current, {
      placeholder,
      theme: 'snow',
      modules: { toolbar: false },
    });

    editor.on('text-change', () => field.onChange(editor.root.innerHTML));
    editor.focus();
  }, []);

  const stateClasses = error ? STATE_CLASSES[STATES.ERROR] : STATE_CLASSES[STATES.BASE];

  return (
    <div
      ref={(e) => {
        editorRef.current = e;
        field.ref(e);
      }}
      onChange={(e) => console.log(e)}
      className={classNames(DEFAULT_CLASSES, stateClasses, className)}
      {...editorProps}
    />
  );
};

export default Editor;
