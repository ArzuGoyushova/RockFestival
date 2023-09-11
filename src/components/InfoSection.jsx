import React from 'react'

export default function InfoSection() {
  return (
    <div>
      <section id="info" className="d-flex justify-content-center py-4">
      <div className="info-content col-12 col-sm-10 d-flex justify-content-between container">
        <div className="day text-center">
          <div className="num display-5">
            3
          </div>
          <span>Days</span>
        </div>
        <div className="ticket-count text-center">
          <div className="num display-5">
            8k
          </div>
          <span>Tickets</span>
        </div>
        <div className="performers text-center">
          <div className="num display-5">
            6+
          </div>
          <p>Groups & Singers</p>
        </div>
      </div>
    </section>
    </div>
  )
}
