import React, { Component } from 'react';
import '../App.css';
import aboutSectionPic from '../Images/aboutSectionPicture.png';

function Home() {
      return (
        <div>
          {/* Intro Section */}
            <section id="intro" className="intro-section">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h1 className = "boldTitle">Smart Diagnosis.</h1>
                    <h1 className = "homepage-font"><br/> ENTER YOUR SYMPTOMS FOR AN UNOFFICIAL HORMONAL DIAGNOSIS </h1>
                    <div className= "homeButton">
                  
                    <a className="btn btn-default page-scroll" href="/survey">take the quiz</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
            <div className = "disclaimer">
                <div className = "disclaimerBox">
                  <h4><b>DISCLAIMER:</b></h4>
                  <h4 className = "disclaimerText">We are not medical professionals and have never claimed to be. This website should not be used as an alternative to a healthcare professional. If you are in need of immediate medical attention, please contact a healthcare provider or call 911.</h4>
                </div>  
              </div>
            </section>
            
            {/* About Section */}
            <section id="about" className="about-section">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h1 className="about-section-title">Who We Are</h1>
                      <div className="left-half">
                        <p>At Smart Diagnosis, our team of Computer Science and Computer Engineering majors are dedicated to using technology to improve healthcare outcomes. We created a website that allows users to fill out a survey about their symptoms and health conditions, which our AI algorithm then analyzes to provide them with an accurate hormonal disorder diagnosis. Our goal is to make medical diagnosis and treatment more efficient, cost-effective, and accessible to everyone. </p>       
                      </div>
                      <div className="right-half">
                        <img 
                        className="aboutSectionPic"
                        src={aboutSectionPic}
                        width="40%">
                        </img>
                      </div>
                  </div>
                </div>
              </div>
            </section> 
        </div>
      );
    }
export default Home;