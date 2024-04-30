import React, { useEffect, useState } from 'react';
import { useNavigate, Link, } from 'react-router-dom';
import 'react-router-dom';
import axios from 'axios';
import './index.css';
import Carousel from './components/carousel';
import Footer from './components/footer';

function App() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);


  //CHECKS IF IT'S LOGGED IN
  useEffect(() => {
    const log = window.localStorage.getItem('loggedIn' || 'signedUp');
  
    if (log !== 'true') { 
      navigate('/');
    }
  }, [navigate]);

  // GETS THOSE MOTHERFUCKING BLOGS OUT
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://apitest.reachstar.io/blog/list');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Carousel />
      <div className='fuck-this-div' >
        <div className="container-md duck-this-div">
          <div className="footer-thingie">
            <p className='home-titlish-thingie'>latest stories</p>
            <hr className='line' />
          </div>
          {blogs.map((blog, index) => (
            <article key={index} className="blog-item">
              <Link className='article-title' to={"/details/" + blog.id} dangerouslySetInnerHTML={{ __html: blog.title }} ></Link>
               <p className='footer-title'>written by: <a href="#" className='footer-text' >{blog.user_id}</a>, date: <span className='footer-text'>{blog.updated_at}</span></p>
              <p className='article-text truncate-text ' dangerouslySetInnerHTML={{ __html: blog.description }}></p>
              <Link to={"/details/" + blog.id} className="details-button carousel-button btn-red article-btn">See Details</Link>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
