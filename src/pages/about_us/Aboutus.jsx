import React from 'react';
import "./Aboutus.css";
import { Navbar } from '../../components/Navbar';

export const Aboutus = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <section className="page">
          <div className='video'>
            <video autoPlay muted loop>
              <source src={"https://d2kdkox9jtuwgl.cloudfront.net/pages/NewAboutPage/videos/aboutStartDesktop_v1.mp4"}/>
            </video>
          </div>
        </section>


      
        <section className="page-2-of-au">
          <div className="text">
            <h1>We bring experiences to market from strategy to execution</h1>
            <p>
              collaborating with ambitious companies to create digital experiences used by billions every day.
            </p>
          </div>

           <div className='page-1-video'>
            <video autoPlay muted loop>
              <source src={"https://d2kdkox9jtuwgl.cloudfront.net/pages/NewAboutPage/videos/naturalDesktop_v2.mp4"}/>
            </video>
          </div>
        </section>
    



          <section className="page-3-of-au">
        <div className='video-2'>
            <video autoPlay muted loop>
              <source src={"https://d2kdkox9jtuwgl.cloudfront.net/pages/NewAboutPage/videos/uniqueDesktop_v2.mp4  "}/>
            </video>
          </div>
        <div className="text">
          <h1>We bring experiences to market from strategy to execution</h1>
          <p>
              collaborating with ambitious companies to create digital experiences used by billions every day.
          </p>
        </div>
        </section>
        </div> 
        </>
  );
};
