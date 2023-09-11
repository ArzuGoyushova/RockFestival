import React from 'react';
import { featuredMusicians } from '../constants';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function FeaturedMusicians() {
  const isMobile = window.innerWidth <= 576;

  return (
    <div>
      <section id="featured-musicians">
        <div className="title container">
          <h1 className="display-5">Featured Musicians</h1>
        </div>
        <div className="pictures container">
          {isMobile ? (
            <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
              {featuredMusicians.map((musician, index) => (
                <div className="picture col-12 col-sm-3" key={musician.id}>
                  <div className="pic d-flex justify-content-center align-items-center">
                    <img src={`./img/${musician.imageUrl}`} alt="" />
                    <div className="pic-time">{musician.time}</div>
                  </div>
                  <div className="desc">{musician.desc}</div>
                </div>
              ))}
            </Carousel>
          ) : (
            <div className="pictures-row">
            <div className="picture-row col-12 d-flex justify-content-between">
              {featuredMusicians.map((musician, index) => (
                index < 4 && (
                  <div className="picture col-12 col-sm-3" key={musician.id}>
                    <div className="pic d-flex justify-content-center align-items-center">
                      <img src={`./img/${musician.imageUrl}`} alt="" />
                      <div className="pic-time">{musician.time}</div>
                    </div>
                    <div className="desc">{musician.desc}</div>
                  </div>
                )
              ))}
            </div>
            <div className="picture-row col-12 d-flex justify-content-between">
              {featuredMusicians.map((musician, index) => (
                index >= 4 && (
                  <div className="picture col-12 col-sm-3" key={musician.id}>
                    <div className="pic d-flex justify-content-center align-items-center">
                      <img src={`./img/${musician.imageUrl}`} alt="" />
                      <div className="pic-time">{musician.time}</div>
                    </div>
                    <div className="desc">{musician.desc}</div>
                  </div>
                )
              ))}
          
        </div>
        </div>
          )}
        </div>
      </section>
    </div>
  );
}

