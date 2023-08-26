import './App.css';
import React from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import surveyJSON from './components/survey.js'
import aboutSectionPic from './Images/aboutSectionPicture.png';

function App() {
  const survey = new Model(surveyJSON);
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-default navbar-transparent navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand page-scroll" href="#intro"><b>Smart Diagnosis</b></a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-left">
              {/* Hidden li included to remove active class from about link when scrolled up past about section */}
              <li className="hidden">
                <a className="page-scroll" href="#intro" />
              </li>
              <li>
                <a className="page-scroll" href="#about"><b>About</b></a>
              </li>
              <li>
                <a className="page-scroll" href="#surveypage"><b>Survey</b></a>
              </li>
              <li>
                <a className="page-scroll" href="#treatments"><b>Treatments</b></a>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container */}
      </nav>
      {/* Intro Section */}
      <section id="intro" className="intro-section">
        <div className="container">
     
          <div className="row">
            <div className="col">
              <h1 className = "boldTitle">Smart Diagnosis.</h1>
              <h1 className = "homepage-font"><br/> ENTER YOUR SYMPTOMS FOR AN UNOFFICIAL HORMONAL DIAGNOSIS </h1>
              <div className= "homeButton">
            
              <a className="btn btn-default page-scroll" href="#surveypage">take the quiz</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className = "disclaimer">
          <div className = "disclaimerBox">
            <h4><b>DISCLAIMER:</b></h4>
            <h4 className = "disclaimerText">We are not medical professionals and have never claimed to be. This website should not be used as an alternative to a healthcare professional. If you are in need of immediate medical attention please contact a healthcare provider or call 911.</h4>
          </div>  
        </div>
      </section>
      
      {/* About Section */}
       <section id="about" className="about-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="about-section-title">Who are we?</h1>
                <div className="left-half">
            
                  <p>At Smart Diagnosis, our team of computer science and computer engineering majors is dedicated to using technology to improve healthcare outcomes. We created a website that allows users to fill out a survey about their symptoms and health conditions, which our AI algorithms then analyze to provide them with an accurate hormonal disorder diagnosis. Our goal is to make medical diagnosis and treatment more efficient, cost-effective, and accessible to everyone. </p>       
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

      {/* Survey Section */}
      <section id="surveypage" className="survey-section">
        <div className="container2">
          <div className="row">
            <div className="col2">
              <h1 className="survey-title"><b>Fill out our survey!</b></h1>
              <hr></hr>
              <Survey model={survey} />
            </div>
          </div>
        </div>
      </section>
      {/* Treatment Section */}
      <section id="treatments" className="treatment-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="treatment-font"><b>Treatments</b></h1>
            </div>
            <div className="float-parent-element">
              <div className="float-child-element">
                <div className="treatment-title red"><b>Diagnosis</b></div>
              </div>
              <div className="float-child-element">
                <div className="treatment-description yellow">insert text about diagnosis</div>
              </div>
            </div>
            <hr></hr>
            <div className="float-parent-element">
              <div className="float-child-element">
                <div className="treatment-title red"><b>Lifestyle</b></div>
              </div>
              <div className="float-child-element">
                <div className="treatment-description yellow">insert text about lifestyle</div>
              </div>
            </div>
            <hr></hr>
            <div className="float-parent-element">
              <div className="float-child-element">
                <div className="treatment-title red"><b>Medications</b></div>
              </div>
              <div className="float-child-element">
                <div className="treatment-description yellow">insert text about medications</div>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </section>

      <section>
      <div className = "footer">
          <div className = "footerBox">
            <h4><b>Footer:</b></h4>
            <h4 className = "footerText">We are not medical professionals and have never claimed to be. This website should not be used as an alternative to a healthcare professional. If you are in need of immediate medical attention please contact a healthcare provider or call 911.</h4>
          </div>  
        </div>
      </section>
    </div>
  );
}

export default App;
