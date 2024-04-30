import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

function Newblog() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const postBlog = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://apitest.reachstar.io/blog/add', { title, description });

      const { data } = response;
      if (data.success) {
        navigate('/home');
      } else {
        setError('There was an error. Make sure you filled out everything in the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="container-fluid h-100 add-blog-bg">
        <form className='add-blog-form container-sm w-100' onSubmit={postBlog}>
          <span className="login-title xtratxt">Write Your blog</span> <br />
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input id="title" type="text" className="form-control" onChange={(event) => setTitle(event.target.value)} value={title} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description / Main body</label>
            <ReactQuill theme="snow" className='text-quill' onChange={(content) => setDescription(content)} value={description} />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <div className="form-group mb-3">
            <input type="submit" className="btn btn-lg btn-danger" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Newblog;


