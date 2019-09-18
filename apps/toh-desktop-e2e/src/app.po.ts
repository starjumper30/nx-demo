import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(
      by.css('starjumper30-root .content span')
    ).getText() as Promise<string>;
  }
}
