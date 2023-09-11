import React from 'react'

export default function AdBoxes() {
  return (
    <div>
       <section id="ad-boxes">
      <div className="ad-box d-flex container">
        <div className="left-side justify-content-start col-12 col-sm-8">
          <div className="title pt-5 mt-5">
            <h1 className="text-wrap display-4">Best Rock Music Festival of 2023</h1>
          </div>
          <div className="desc d-none d-sm-block">
            <p className="opacity-medium">
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout.
            </p>
          </div>
          <div className="buy-ticket-button mt-5">
            <button>Buy Ticket <i className="fa-solid fa-arrow-right-long"></i></button>
          </div>
        </div>
        <div className="right-side justify-content-end col-4">
          <div className="ellipse">
            <img className="w-25" src="./img/ellipse.png" alt="" />
          </div>
          <div className="rock-2">
            <img src='./img/02 rock photo.png' alt="" />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
