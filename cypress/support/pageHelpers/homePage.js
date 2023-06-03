const locators = require('../locators/homePage');

module.exports = {
  open(url = '/') {
    cy.visit(url);
  },
  showHeaderSubmenu(item) {
    cy.get(item).realHover();
  },
  hideHeaderSubMenu() {
    // Just moving mouse away to hide menu
    cy.get('body').realHover({ position: 'topLeft' });
  },
  get subMenu() {
    return cy.get(locators.HEADER.SUBMENU).should('be.visible')
  },
  selectCompanySubItem(item) {
    this.showHeaderSubmenu(locators.HEADER.COMPANY_ITEM);
    this.subMenu.contains(item).invoke('removeAttr', 'target').click();
    this.hideHeaderSubMenu();
  },
};
