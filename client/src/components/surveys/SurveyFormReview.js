import React from 'react';
import { connect } from 'react-redux';

const SurveyReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        <label>Survey Title</label>
        <div>{formValues.title}</div>
      </div>
      <div>
        <label>SubjectTitle</label>
        <div>{formValues.subject}</div>
      </div>
      <div>
        <label>E-mail Body</label>
        <div>{formValues.body}</div>
      </div>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps)(SurveyReview);
