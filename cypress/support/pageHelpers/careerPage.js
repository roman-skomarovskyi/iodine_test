const locators = require('../locators/careerPage.js');

module.exports = {
  careerForm: {
    selectJob(jobTitle) {
      cy.getIframeBody(locators.CAREER_FORM.ROOT).contains(jobTitle).click();
    },
  },
  jobDescriptionForm: {
    continue() {
      cy
        .getIframeBody(locators.JOB_DESCRIPTION_FORM.ROOT)
        .find(locators.JOB_DESCRIPTION_FORM.APPLY_BUTTON).click();
    }
  },
  infoDescriptionFrom: {
    continue() {
      cy.
        getIframeBody(locators.INFO_DESCRIPTION_FROM.ROOT)
        .find(locators.CONTINUE_BUTTON).click();
    },
  },
  genderRaceForm: {
    fill(gender, race) {
      cy.getIframeBody(locators.GENDER_RACE_FORM.ROOT).within(() => {
        cy.get(gender).click();
        cy.get(race).click();
        cy.get(locators.CONTINUE_BUTTON).click();
      });
    }
  },
  veteranForm: {
    fill(identification) {
      cy.getIframeBody(locators.VETERAN_FORM.ROOT).within(() => {
        cy.get(identification).click();
        cy.get(locators.CONTINUE_BUTTON).click();
      });
    },
  },
  disabilityForm: {
    fill(disabilityStatus, name, date) {
      cy.getIframeBody(locators.DISABILITY_FORM.ROOT).within(() => {
        cy.get(disabilityStatus).click();
        cy.get(locators.DISABILITY_FORM.NAME_INPUT).type(name);
        cy.get(locators.DISABILITY_FORM.DATE_INPUT).type(date);
        cy.get(locators.CONTINUE_BUTTON).click();
      });
    }
  },
  jobApplyForm: {
    get root() {
      return cy.getIframeBody(locators.JOB_APPLY_FORM.ROOT);
    },
    textInput(locator) {
      return this.root.find(locator);
    },
    submit() {
      this.root.find(locators.JOB_APPLY_FORM.SUBMIT_BUTTON).click();
    },
    checkErrorMessageForInput(locator, message) {
      this.textInput(locator)
        .invoke('prop', 'validationMessage')
        .should('equal', message);
    },
  },
}
