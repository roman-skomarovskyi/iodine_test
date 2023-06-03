module.exports = {
  CONTINUE_BUTTON: 'button[ns-qa="continueBtn"]',
  CAREER_FORM: {
    ROOT: 'CareerHomeSearch',
  },
  JOB_DESCRIPTION_FORM: {
    ROOT: 'SubmitResume',
    APPLY_BUTTON: 'div[ns-qa="applyBtn"]',
  },
  INFO_DESCRIPTION_FROM: {
    ROOT: 'ShowVevraaForm',
  },
  GENDER_RACE_FORM: {
    ROOT: 'markedPage=GENDER',
    GENDER: {
      MALE: 'input[id="male"]',
    },
    RACE: {
      DECLINE: 'input[id="race-8"]',
    },
  },
  VETERAN_FORM: {
    ROOT: 'markedPage=VETERAN',
    NOT_IDENTIFY: 'input[id="not-identify-identify"]',
  },
  DISABILITY_FORM: {
    ROOT: 'SubmitVevraaForm',
    DISABILITY: {
      DECLINE: 'input[id="declined_disability"]',
    },
    NAME_INPUT: 'input[id="your-name"]',
    DATE_INPUT: 'input[id="today-date"]',
  },
  JOB_APPLY_FORM: {
    ROOT: 'ApplyJob',
    PERSONAL_INFO: {
      FIRST_NAME: 'input[id="firstName"]',
      LAST_NAME: 'input[id="lastName"]',
    },
    SUBMIT_BUTTON: 'button[ns-qa="submitBtn"]'
  },
  ERROR_MESSAGES: {
    FILL_REQUIRED: 'Please fill in this field.',
  },
};
