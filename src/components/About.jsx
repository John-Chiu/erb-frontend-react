import React from 'react';
import Title from './Title';

function About() {
  return (
    <section className='section' id='about'>
      <Title mainTitle='about' subTitle='us' />
      <div className='section-center about-center'>
        <div className='about-img'>
          <img
            src='images/japan.jpg'
            className='about-photo'
            alt='awesome landscape'
          />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus amet repellendus sit corrupti. Pariatur aliquam,
            debitis amet rem repellendus dolorum corrupti provident id quos non.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus amet repellendus sit corrupti. Pariatur aliquam,
            debitis amet rem repellendus dolorum corrupti provident id quos non.
          </p>
          <a href='#home' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
}

export default About;
