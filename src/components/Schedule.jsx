import React from 'react';
import { schedule } from '../constants';

export default function Schedule() {
  return (
    <div>
       <section id="schedule">
      <div className="schedule-content container">
        <div className="title col-12">
          <h1 className="display-5">Schedule</h1>
        </div>
        {schedule.map((sche) => (
  <div className="schedule-row d-flex align-items-center justify-content-between" key={sche.id}>
    <div className="date col-12 col-sm-6 justify-content-start">{sche.date}</div>
    <div className="info col-12 col-sm-4 justify-content-end">
      <div className="program"><b>Program:</b>{sche.program}</div>
      <div className="artist"><b>Artist:</b>{sche.artist}</div>
    </div>
  </div>
))}
      </div>
    </section>
    </div>
  )
}
