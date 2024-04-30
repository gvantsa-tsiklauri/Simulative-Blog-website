// Editblog.jsx

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../index.css';
import axios from 'axios';

function Editblog({ id, initialTitle, initialDescription, onSave }) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (content) => {
    setDescription(content);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await onSave(id, title, description);
    } catch (error) {
      console.error('Error editing blog:', error);
    }
  };

  return (
    <>
      <div className="container-fluid h-100 add-blog-bg">
        <form className='add-blog-form container-sm w-100' onSubmit={handleSubmit}>
          <span className="login-title xtratxt">Edit Your Blog</span> <br />
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input id="title" type="text" className="form-control" value={title} onChange={handleTitleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description / Main body</label>
            <ReactQuill theme="snow" className='text-quill' value={description} onChange={handleDescriptionChange} />
          </div>
          <div className="form-group mb-3">
            <input type="submit" className="btn btn-lg btn-danger" value="Save Changes" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Editblog;
