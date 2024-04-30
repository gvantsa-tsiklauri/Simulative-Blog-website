import '../index.css';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Footer from './footer';

function Details() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);
    const [editedDescription, setEditedDescription] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    // DETALEBISTVIS KONKRETULI BLOGIS GAMOTANA AM USEEFFECTIT KETDEBA, GAFICEB ZEBUNEBRIVI DZLEBIT MOQMEDEBS, AR SHEEXO TORE VEGAR GAMOITANS.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://apitest.reachstar.io/blog/get/${id}`);
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error.response ? error.response.data : error.message);
            }
        };
        fetchData();
    }, [id]);

    //POSTIS WASHLIS GILAKISTVIS SAWIRO FUNQCIA ESAA
    const deletePost = async () => {
        try {
            const response = await axios.delete(`https://apitest.reachstar.io/blog/delete/${id}`);
            navigate('/home')
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        }
    };

    //ES DATA TU VER IPOVA SANAM AR IPOVIS ES GAMOVA
    if (!data) {
        return (
        <div className='footer-thingie loading-div'><p className='carousel-sm-text'>Loading..</p></div>
        )
    }

    //AXLA CHEMI WAMEBA IWYEBA, KOMENTAREBIS DAWERA
    const postComment = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://apitest.reachstar.io/comment/add/' + id, {comment});
            const refetchResponse = await axios.get(`https://apitest.reachstar.io/blog/get/${id}`);
            setData(refetchResponse.data);
        } catch (error) {
            console.error('Error, bee:', error);
            setError('An error occurred. Please try again.');
        }
    };

    //VAX, AMIS DAWERA AR YOFILA ISE DZNELI, AXLA KOMENTARIS WASHLAZE GADAVIDET
    const deleteComment = async (commentId) => {
        try {
            const response = await axios.delete(`https://apitest.reachstar.io/comment/delete/${commentId}`);
            const updatedComments = data.comments.filter(comment => comment.id !== commentId);
            setData(prevData => ({ ...prevData, comments: updatedComments }));
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        }
    };

    // BOLO NAWILI, POSTIS DAEDITEBA.
    const handleEditClick = () => {
        setIsEditing(true);
        setEditedDescription(data.description);
    };

    // TO GADAVWYVETT ROM AR GVINDA DAEDITEBA
    const handleCancelClick = () => {
        setIsEditing(false);
    };

    const handleSaveClick = async () => {
        try {
            await axios.put(`https://apitest.reachstar.io/blog/edit/${id}`, { title: data.title,  description: editedDescription });
            
            const response = await axios.get(`https://apitest.reachstar.io/blog/get/${id}`);
            setData(response.data);
            setIsEditing(false);
        } catch (error) {
            console.error('Error editing blog:', error);
            setError('An error occurred. Please try again.');
        }
    };

    const handleDescriptionChange = (content) => {
        setEditedDescription(content);
    };

    if (!data) {
        return (
            <div className='footer-thingie loading-div'><p className='carousel-sm-text'>Loading..</p></div>
        );
    }

     const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`https://apitest.reachstar.io/blog/edit/${id}`, { title: data.title, description: data.description });
            const updatedResponse = await axios.get(`https://apitest.reachstar.io/blog/get/${id}`);
            setData(updatedResponse.data);
        } catch (error) {
            console.error('Error editing blog:', error);
            setError('An error occurred while editing the blog.');
        }
    };

    return (
        <>
            <div className="fuck-this-div details-div">
                <div className='duck-this-div container-md card'>
                    <div className="container-fluid bg-div"></div>
                    <article className="blog-item">
                        <p className='article-title' dangerouslySetInnerHTML={{ __html: data.title }}></p>
                        <p className='footer-title'>written by: <a href="#" className='footer-text'>{data.user_id}</a>, date: <span className='footer-text'>{data.updated_at}</span></p>
                        {isEditing ? (
                            <ReactQuill theme="snow" className='text-quill' value={editedDescription} onChange={handleDescriptionChange} />
                        ) : (
                            <p className='article-text' dangerouslySetInnerHTML={{ __html: data.description }}></p>
                        )}
                        <div>
                            {isEditing ? (
                                <>
                                    <button className='details-button carousel-button btn-red' onClick={handleSaveClick}>Save Changes</button>
                                    <button className='details-button carousel-button btn-del cancel-btn' onClick={handleCancelClick}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    <button className='details-button carousel-button btn-red' onClick={handleEditClick}>Edit Blog</button>
                                    <button className='carousel-button carousel-button-white btn-del' onClick={deletePost}>Delete Blog</button>
                                </>
                            )}
                        </div>
                    </article>
                    <div className="footer-thingie mt-5">
                        <p className='home-titlish-thingie'>Comments: {data.comments.length}</p>
                        <hr className='line' />
                    </div>
                    <div>
                        <div className="com-wrapper">
                            <div className="comment-item blog-item">
                                <form className='w-100' onSubmit={postComment}>
                                    <div className="mb-3 w-100">
                                        <ReactQuill theme="snow" id='quill-of-comments' className='text-quill' onChange={(content) => setComment(content)} value={comment} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="submit" className="details-button carousel-button btn-red mt-2 " />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <div>
                        {data.comments.map((comment, index) => (
                            <div key={comment.id} className="com-wrapper">
                                <div key={index} className="comment-item blog-item">
                                    <div className='pfp pfp-comment' ></div> 
                                    <section>
                                        <p className='comment-author' >{comment.user_id}</p>
                                        <p className='com-date'>date: <span className='com-date'>{comment.updated_at}</span></p>
                                        <p className='comment-text' dangerouslySetInnerHTML={{ __html: comment.comment }}></p>
                                        <button className='del-button btn btn-sm btn-danger' onClick={() => deleteComment(comment.id)}>Delete Comment</button>
                                    </section>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Details
