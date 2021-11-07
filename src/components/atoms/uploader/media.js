import { Button, BUTTON_SIZES, Paragraph, Spacing, Text } from '@atoms';
import { useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import './index.scss';

const UploadArea = ({ onDrop }) => (
  <div
    className='py-4 flex justify-center w-full text-p5 text-grey-dark text-center rounded-10px upload-area'
    onDragOver={(e) => e.preventDefault()}
    onDrop={onDrop}
  >
    <Text> &#8593;</Text>
    <Spacing className='pl-3' />
    <Text> Drop to upload files or </Text>&nbsp;
    <Text className='font-medium text-blue-light'>browse</Text>
  </div>
);

const uploadFile = ({ file, onChange }) => {
  const reader = new FileReader();
  reader.onload = function (event) {
    const newFile = { file, url: event.target.result, id: uuidv4() };
    onChange(newFile);
  };
  reader.readAsDataURL(file);
};

const Uploader = ({ upload, find }) => {
  const inputRef = useRef(null);
  const id = `media-uploader`;

  const onChange = (file) => {
    const formData = new FormData();
    formData.append('file', file.file);
    upload(formData);
  };

  const onUpload = (e) => {
    const file = e.target.files[0];
    uploadFile({ file, onChange });
    // RESET INPUT VALUE TO TRACK SAME FILE UPLOAD AGAIN
    inputRef.current.value = null;
  };

  const onFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    uploadFile({ file, onChange });
    // RESET INPUT VALUE TO TRACK SAME FILE UPLOAD AGAIN
    inputRef.current.value = null;
  };

  return (
    <label htmlFor={id} className='flex flex-col justify-center h-full'>
      <UploadArea onDrop={onFileDrop} />
      <Spacing className='pt-5' />
      <input type='file' id={id} onChange={onUpload} className='hidden' ref={inputRef} />
    </label>
  );
};

export default Uploader;
