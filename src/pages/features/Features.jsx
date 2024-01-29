import React from "react";
import "./features.css";
import { Navbar } from "../../components/Navbar";

export const Features = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <section className="page-1-fe">
          <div className="hero-section-of-features-page">
            <div className="hero-section-of-features-page-section-1">
              <h1>Operating systems</h1>
              <p>
                logo is trusted by the worlds largest mobile companies to
                envisage and ship the future of their Operating sysytems.
              </p>
            </div>
            <video autoPlay muted loop>
              <source
                src={
                  "https://d2kdkox9jtuwgl.cloudfront.net/pages/WhatWeDoPage/videos/desktop/original/operating-systems.mp4"
                }
              />
            </video>
          </div>
        </section>

        <section className="page-2-of-features-page">
          <div className="page-2-of-features-page-main-div">
            <div className="section-1">
              <h1>Mobility</h1>
              <p>
                logo are sought out by the worlds leading automotive companies
                to envisage,design, and launch the futures of human-centered
                mobility.
              </p>
            </div>

            <video autoPlay muted loop>
              <source
                src={
                  "https://player.vimeo.com/external/514163626.sd.mp4?s=7acce76f4bf91ea9af2f2e310b388d6172ebd20b&profile_id=164&oauth2_token_id=57447761"
                }
              />
            </video>
          </div>
        </section>

        <section className="page-3-of-features-page">
          <div className="main-div-of-features-page-3">
            <div className="section-1">
              <h1>Travel</h1>
              <p>
                World leaders in travel trust logo to help them create
                unforgettable travel experiences.
              </p>
            </div>

            <video autoPlay muted loop>
              <source
                src={
                  "https://player.vimeo.com/external/321962311.sd.mp4?s=dd9fc4e73dec30a68e213eaed998ec8e553508fa&profile_id=164&oauth2_token_id=57447761"
                }
              />
            </video>
          </div>
        </section>
      </div>
    </>
  );
};
