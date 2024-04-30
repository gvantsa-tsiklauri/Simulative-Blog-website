// EditBlogPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Editblog from './editblog';
import { Navigate } from 'react-router-dom';

function EditBlogPage({ id }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://apitest.reachstar.io/blog/get/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleSave = async (id, title, description) => {
    try {
      await axios.put(`https://apitest.reachstar.io/blog/edit/${id}`, { title, description });
      Navigate(`/details/${id}`)
    } catch (error) {
      console.error('Error editing blog:', error);
    }
  };

  return (
    <Editblog
      id={id}
      initialTitle={title}
      initialDescription={description}
      onSave={handleSave}
    />
  );
}

export default EditBlogPage;
