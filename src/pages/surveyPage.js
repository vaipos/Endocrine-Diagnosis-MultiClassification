import React from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import surveyJSON from '../components/survey.js'

function surveyPage() {
  const survey = new Model(surveyJSON);
  return (
    <section id="surveypage" className="survey-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="survey-title"><b>Tell us about your situation</b></h1>
            <hr></hr>
            <Survey model={survey} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default surveyPage;