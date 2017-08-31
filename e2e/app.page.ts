import {browser, by, element} from 'protractor';

export class ContactPage {
  escapeFields: Array<String>

  constructor() {
    this.escapeFields = ['eitable', '_id'];
  }


  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('app-list-films md-toolbar-row span')).getText();
  }

  //TODO:: optimize passing parameters
  getAddContactHeaderText() {
    return element(by.css('app-add-film md-toolbar-row .title-margin_left')).getText();
  }

  filmAddBtn() {
    return element(by.css('app-films .btn-film_add'));
  }

  saveBtn() {
    return element(by.css('button.add-film-submit.mat-raised-button'));
  }

  checkRequred(fieldName: string, fieldValue: string) {
    if (this.escapeFields.indexOf(fieldName) == -1) {
      element(by.name(fieldName)).sendKeys(fieldValue);
      this.saveBtn().click();
      return expect(element(by.css(`.${fieldName}-container .${fieldName}-required-alert`))).toBeDefined;
    }
  }

  inputFied(fieldName: string, fieldValue: string) {
    if (this.escapeFields.indexOf(fieldName) == -1) {
      return element(by.name(fieldName)).sendKeys(fieldValue);
    }
  }

  fillFormData(formValue) {
    for (let key in formValue) {
      this.inputFied(key, formValue[key])
    }
    return true;
  }

  getContactList() {
    return element.all(by.css('app-list-films md-list .each-film'));
  }

}
