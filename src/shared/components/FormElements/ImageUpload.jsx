import React, { useRef } from 'react';

import Button from '../FormElements/Button';
import './ImageUpload.css';

function ImageUpload(props) {
  const filePickerRef = useRef();

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = (e) => {
    console.log(e.target);
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        type="file"
        style={{ display: 'none' }}
        accept=".jpg,.png,.jpeg"
        ref={filePickerRef}
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className="image-upload__preview">
          <img src="" alt="Preview" />
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
    </div>
  );
}

export default ImageUpload;
