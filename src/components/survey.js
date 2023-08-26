import 'survey-core/defaultV2.min.css';

//Survey.StylesManager.applyTheme("defaultV2");

const surveyJSON = {
    "elements": [{
      "type": "checkbox",
      "name": "question1",
      "title": "Which of the following symptoms are you experiencing?",
      "isRequired": true,
      "choices": [{
          "value": "Item 1",
          "text": "Abnormal Weight Gain"
      }, {
          "value": "Item 2",
          "text": "Excessive Hair Growth"
      }, {
          "value": "Item 3",
          "text": "Heavy/Irregular Menstrual Periods"
      }, {
          "value": "Item 4",
          "text": "Vision Loss"
      }, {
          "value": "Item 5",
          "text": "Sensitivity to Heat"
      }],
      "showSelectAllItem": true
    }, {
      "type": "checkbox",
      "name": "question2",
      "visibleIf": "{question1} contains 'Item 1'",
      "title": "Where are you noticing weight gain?",
      "isRequired": true,
      "choices": [{
          "value": "Item 1",
          "text": "Face"
      }, {
          "value": "Item 2",
          "text": "Neck"
      }, {
          "value": "Item 3",
          "text": "Abdomen"
      }, {
          "value": "Item 4",
          "text": "Upper Back"
      }, {
          "value": "Item 5",
          "text": "Shoulders"
      }],
      "showOtherItem": true,
      "showSelectAllItem": true
    }]
  };
/*
function sendDataToServer(survey) {
    //send Ajax request to your web server
    alert("The results are: " + JSON.stringify(survey.data));
}

function App(){
    var survey = new Model(surveyJSON);
    $("#surveyContainer").Survey({
        model: survey,
        onComplete: sendDataToServer
    });
}*/

export default surveyJSON;

