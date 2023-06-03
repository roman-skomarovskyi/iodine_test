const { homePage, careerPage } = require('../support/pageHelpers');
const { careerPageLocators, homePageLocators } = require('../support/locators');

describe('Page navigation', () => {
  it('Required field message on applyJob form', () => {
    homePage.open();
    homePage.selectCompanySubItem(homePageLocators.HEADER.CAREERS_SUB_ITEM);

    careerPage.careerForm.selectJob('Software Development Engineer in Test - SDET');
    careerPage.jobDescriptionForm.continue();
    careerPage.infoDescriptionFrom.continue();
    careerPage.genderRaceForm.fill(
      careerPageLocators.GENDER_RACE_FORM.GENDER.MALE,
      careerPageLocators.GENDER_RACE_FORM.RACE.DECLINE
    );
    careerPage.veteranForm.fill(careerPageLocators.VETERAN_FORM.NOT_IDENTIFY);
    careerPage.disabilityForm.fill(
      careerPageLocators.DISABILITY_FORM.DISABILITY.DECLINE,
      'Test Name',
      '1111-11-11',
    );

    careerPage.jobApplyForm.textInput(careerPageLocators.JOB_APPLY_FORM.PERSONAL_INFO.FIRST_NAME).type('First Name');
    careerPage.jobApplyForm.submit();
    careerPage.jobApplyForm.checkErrorMessageForInput(
      careerPageLocators.JOB_APPLY_FORM.PERSONAL_INFO.LAST_NAME,
      careerPageLocators.ERROR_MESSAGES.FILL_REQUIRED,
    );
  });
});
