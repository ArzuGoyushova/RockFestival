import React from 'react'

export default function Tickets() {
  return (
    <div>
          <section id="tickets">
      <div className="tickets-content py-5 container">
        <div className="title col-12 d-flex justify-content-center">
          <h1 className="display-5">Tickets</h1>
        </div>
        <div className="desc col-12 d-flex justify-content-center">
          <p className="opacity-medium">Choose the best ticket for you</p>
        </div>
        <div className="ticket-cards d-flex justify-content-between col-12">
          <div className="ticket-card col-12 col-sm-4">
            <div className="ticket-card-title">
              <h4>1 Day Pass</h4>
            </div>
            <div className="ticket-card-info">
              <p>One day ticket for:</p>
              <ul>
                <li><i className="fa-regular fa-circle"></i> 20.05.2023</li>
                <li><i className="fa-regular fa-circle"></i> 21.05.2023</li>
                <li><i className="fa-solid fa-circle"></i> 22.05.2023</li>
              </ul>
            </div>
            <div className="ticket-card-price t1">
              <h1 className="display-5">$100</h1>
            </div>
            <div className="ticket-card-button">
              <button>Buy Ticket</button>
            </div>
          </div>
          <div className="ticket-card col-12 col-sm-4">
            <div className="ticket-card-title">
              <h4>3 Day Pass</h4>
            </div>
            <div className="ticket-card-info ps-5 text-start ms-5">
              <p>The full 3 days of festival:</p>
              <p>+ 1 free meal and</p>
              <p>+ 1 free drink for one day</p>
            </div>
            <div className="ticket-card-price">
              <h1 className="display-5">$150</h1>
            </div>
            <div className="ticket-card-button">
              <button>Buy Ticket</button>
            </div>
          </div>
          <div className="ticket-card col-12 col-sm-4">
            <div className="ticket-card-title">
              <h4>VIP</h4>
            </div>
            <div className="ticket-card-info ps-5 text-start ms-3">
              <p>The full 3 days of festival:</p>
              <p>+ access to VIP zone behind the stage</p>
              <p>+ three free meals for each day</p>
            </div>
            <div className="ticket-card-price">
              <h1 className="display-5">$200</h1>
            </div>
            <div className="ticket-card-button">
              <button>Buy Ticket</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
