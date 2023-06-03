// Currently works only for careers iframe, because id is hardcoded
Cypress.Commands.add('getIframeBody', (partialMatch, retryCount = 3) => {
  return cy
    .get('iframe[id="gnewtonIframe"]', { log: false })
    .its('0.contentDocument', { log: false })
    .then(contentDocument => {
      const $body = Cypress.$(contentDocument).find('body');
      // Waiting for specified form to appear
      const $form = $body.find(`form[action*="${partialMatch}"]`);

      if ($form.length > 0) {
        return cy.wrap($body, { log: false });
      }
      if (retryCount > 0) {
        cy.wait(3000, { log: false });
        return cy.getIframeBody(partialMatch, retryCount - 1);
      }
      throw new Error(`Unable to find form with FORM containing '${partialMatch}'`);
    });
});
