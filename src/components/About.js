import React from 'react'
import about_us from '../copy/about_us.json'

function About() {
  return (
    <div className="screen">
      <h1>ჩვენ შესახებ</h1>
      <p>{about_us.geo}</p>
    </div>
  );
}

export default About;
