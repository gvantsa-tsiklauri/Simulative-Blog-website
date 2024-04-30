import '../index.css';
import { useNavigate, Link } from 'react-router-dom';

function Carousel() {
  const navigate = useNavigate();

  const handleWriteNowClick = () => {
    navigate('/addblog');  
  };


  return (
    <div className='div-for-carousel-fixation'>
      <div className="container-fluid test">
        <div id="carouselExampleCaptions" className="carousel slide fixed-carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
          <div className="carousel-item active">
                <div className="d-flex justify-content-center align-items-center w-100 h-100 carousel-slide1">
                  <div className="carousel-main-div text-center">
                    <a href='#' className="carousel-title">HOW TO CHOOSE THE BEST COFFEE</a> <br />
                    <a className='carousel-sm-text1'>By Madisson Barnet</a> <span className='carousel-sm-text'> / in </span> <a className='carousel-sm-text1' href="/blogs" >humans</a> <span className='carousel-sm-text'> / 5 </span> <a href="#" className='carousel-sm-text1' >comments</a> <br />
                    <Link to={'/details/316'} className="carousel-button carousel-button-white" >Read On</Link>
                    <button className="carousel-button carousel-button-transparent" > <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANhJREFUSEvtVdsRgjAQ3O3EUrQSpBK1EulEO9FO1iwTHCRCIA4/DvcDw+T2ReaOWLm4Mj4SAkk3APtC4oZk3e/9RqBC8LaN5AfmKMHwYI5UUitsIxhNaosod4mwRfRHEUnakXwOLf38kyUdAVwjcE2y6ZMUE1hxBB6O8DsAE7VuigjCgDyH3lNP6QGACf3NT9clvNvNY9E0DUvHCjvVySKR5Lgcm+t9dva4jo227xgMkJQkCzBR52b+PrD1sJwcUbZilJWJ5jgwqCNJruIUU3RTZXdyVu7CAy/M97oZQkvRXQAAAABJRU5ErkJggg==" alt="icon" /> Read Later</button>
                  </div>
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <span>Got something on your mind? Make a blog! </span>
                  <button className="carousel-button carousel-button-white" onClick={handleWriteNowClick}>Write Now</button>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center align-items-center w-100 h-100 carousel-slide2">
                  <div className="carousel-main-div text-center">
                    <a className="carousel-title">A BEAUTIFUL BLOG WITH NO IMAGES REQUIRED</a> <br />
                    <a className='carousel-sm-text1'>By Madisson Barnet</a> 
                      <span className='carousel-sm-text'> / in </span> 
                      <a className='carousel-sm-text1' href="/blogs" >humans</a> 
                      <span className='carousel-sm-text'> / 3 </span> 
                      <a href="#" className='carousel-sm-text1' >comments</a> <br />
                    <button className="carousel-button carousel-button-white" >Read On</button>
                    <button className="carousel-button carousel-button-transparent" > <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANhJREFUSEvtVdsRgjAQ3O3EUrQSpBK1EulEO9FO1iwTHCRCIA4/DvcDw+T2ReaOWLm4Mj4SAkk3APtC4oZk3e/9RqBC8LaN5AfmKMHwYI5UUitsIxhNaosod4mwRfRHEUnakXwOLf38kyUdAVwjcE2y6ZMUE1hxBB6O8DsAE7VuigjCgDyH3lNP6QGACf3NT9clvNvNY9E0DUvHCjvVySKR5Lgcm+t9dva4jo227xgMkJQkCzBR52b+PrD1sJwcUbZilJWJ5jgwqCNJruIUU3RTZXdyVu7CAy/M97oZQkvRXQAAAABJRU5ErkJggg==" alt="icon" /> Read Later</button>
                  </div>
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <span>Got something on your mind? Make a blog! </span>
                  <button className="carousel-button carousel-button-white" onClick={handleWriteNowClick}>Write Now</button>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center align-items-center w-100 h-100 carousel-slide3">
                  <div className="carousel-main-div text-center">
                    <a className="carousel-title">WHY YOU SHOULD AVOID SMOKING IN INDOOR SPACES</a> <br />
                    <a className='carousel-sm-text1'>By Madisson Barnet</a> <span className='carousel-sm-text'> / in </span> <a className='carousel-sm-text1' href="/blogs" >humans</a> <span className='carousel-sm-text'> / 7 </span> <a href="#" className='carousel-sm-text1' >comments</a> <br />
                    <button className="carousel-button carousel-button-white" >Read On</button>
                    <button className="carousel-button carousel-button-transparent" > <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANhJREFUSEvtVdsRgjAQ3O3EUrQSpBK1EulEO9FO1iwTHCRCIA4/DvcDw+T2ReaOWLm4Mj4SAkk3APtC4oZk3e/9RqBC8LaN5AfmKMHwYI5UUitsIxhNaosod4mwRfRHEUnakXwOLf38kyUdAVwjcE2y6ZMUE1hxBB6O8DsAE7VuigjCgDyH3lNP6QGACf3NT9clvNvNY9E0DUvHCjvVySKR5Lgcm+t9dva4jo227xgMkJQkCzBR52b+PrD1sJwcUbZilJWJ5jgwqCNJruIUU3RTZXdyVu7CAy/M97oZQkvRXQAAAABJRU5ErkJggg==" alt="icon" /> Read Later</button>
                  </div>
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <span>Got something on your mind? Make a blog! </span>
                  <button className="carousel-button carousel-button-white" onClick={handleWriteNowClick}>Write Now</button>
                </div>
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

