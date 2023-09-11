import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { merch } from '../constants';

export default function Merch() {
  const isSmallScreen = window.innerWidth <= 576;

  return (
    <div>
          <section id="merch">
          <div className="merch-content container">
          <div className="title col-12 d-flex justify-content-center">
            <h1 className="display-5">Merch</h1>
          </div>
          <div className="desc col-12 d-flex justify-content-center">
            <p className="opacity-medium">Your favorite rock merches in our festival.</p>
          </div>
          {isSmallScreen ? (
            <Carousel showArrows={true}>
              {merch.map((item, index) => (
                <div key={index}>
                  <div className="picture col-12">
                    <div className="pic">
                      <img src={`./img/${item.imageUrl}`} alt={item.alt} />
                    </div>
                    <div className="desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </Carousel>
          ) : (
            <div className="picture-row col-12 d-flex justify-content-between">
              {merch.map((item, index) => (
                <div className="picture col-3" key={index}>
                  <div className="pic">
                    <img src={`./img/${item.imageUrl}`} alt={item.alt} />
                  </div>
                  <div className="desc">{item.desc}</div>
                </div>
              ))}
            </div>
          )}
        </div>
    </section>
    </div>
  )
}
