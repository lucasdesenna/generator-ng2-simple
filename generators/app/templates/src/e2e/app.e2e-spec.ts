
describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Simple Angular 2 App';


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});