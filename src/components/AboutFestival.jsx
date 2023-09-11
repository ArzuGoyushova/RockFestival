import React from 'react'

export default function AboutFestival() {
  return (
    <div>
        <section id="about-festival">
      <div className="about-festival-content d-flex justify-content-between container">
        <div className="left-side col-12 col-sm-4">
          <div className="img-01">
            <img src="./img/02.png" alt="" />
          </div>
          <div className="img-02">
            <img src="./img/01.png" alt="" />
          </div>
        </div>
        <div className="right-side col-12 col-sm-6 my-auto">
          <div className="title display-5 py-5">About Festival</div>
          <div className="desc opacity-medium">
            <p>
              The concept caught fire and spread quickly as rock festivals took on a unique identity and attracted
              significant media attention around the world. By 1969, promoters were staging dozens of them. According to
              Bill Mankin, in their dawning age rock festivals were important socio-cultural milestones. Contrary to
              popular belief, Lorem Ipsum is not simply random text. Latin literature from 45 BC, making it over 2000
              years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
