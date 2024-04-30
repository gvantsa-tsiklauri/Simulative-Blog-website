import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; // Import axios here
import '../index.css';
import Footer from './footer';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

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
            <div className='fuck-this-div blogs-div' >
                <div className="container-md duck-this-div">
                    <div className="footer-thingie">
                        <p className='home-titlish-thingie'>BLOGS</p>
                        <hr className='line' />
                    </div>
                    {blogs.map((blog, index) => (
                        <article key={index} className="blog-item">
                            <Link className='article-title' to={"/details/" + blog.id} dangerouslySetInnerHTML={{ __html: blog.title }} ></Link>
                            <p className='footer-title'>written by: <a href="#" className='footer-text' >{blog.user_id}</a>, date: <span className='footer-text'>{blog.updated_at}</span></p>
                            <p className='article-text truncate-text' dangerouslySetInnerHTML={{ __html: blog.description }}></p>
                            <Link to={"/details/" + blog.id} className="details-button carousel-button btn-red">See Details</Link>
                        </article>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blogs;
