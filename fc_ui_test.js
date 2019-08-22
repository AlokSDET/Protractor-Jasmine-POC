describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});

describe('Super Calculator  tests', function () {

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.className('ng-binding'));
    var history = element.all(by.repeater('result in memory'));

    beforeEach(function () {
        //  browser.waitForAngularEnabled(false);
        browser.get('http://juliemr.github.io/protractor-demo/');
        var title = element(by.xpath("//h3[text()='Super Calculator']"));
        title.getText().then(function (text) {
            console.log(text);
        });
    });

    it('should launch Super Calculator home page successfully', function () {
        browser.getTitle().then(function (title) {
            expect(title).toBe("Super Calculator");
        });
    });

    it('should launch Add two number ', function () {
        add(5, 10)
        verifyResult('15')
    });

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    function verifyResult(resultNo) {
        expect(result.getText()).toBe(resultNo);
    }

    it('should store results in momory', function () {
        add(5, 10)
        verifyResult('15');
        add(10, 10)
        verifyResult('20');
        expect(history.count()).toBe(2);
        expect(history.first().getText()).toContain('10 + 10');
        history.for
        history.get(0).getText().then(function (text) {
            console.log(text);
        });
    });
});


//fc application 

describe('FC tests ', function () {
    var fwbButton = element(by.xpath("//a[@href='/start']"));
    var startTestBtn = element(by.xpath("//a[@href='/demographics-survey']"));
    var submitBtn = element (by.xpath("//button[@type='submit']"));

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:3000/');
        browser.driver.manage().window().maximize();
    });

    it(' verify the title of FC application', function () {
        browser.getTitle().then(function (title) {
            expect(title).toBe('React App');
        });
    });

    it('verify whether user is able to click on "Tell me my FW" button', function(){
        fwbButton.click();
        expect(element(by.className('col col-6 app-v-start__content-heading')).getText()).toBe('Your personalised financial counselor');
    });

    it('click on start test button', function(){
        fwbButton.click();
        startTestBtn.click();
        expect(submitBtn.isEnabled()).toBe(false);
    });

    it('verify whether user is able to submit the form successfully with valid input', function() {
        fwbButton.click();
        startTestBtn.click();
        element(by.id('email')).sendKeys("chitransh0501@rediffmail.com");
        element(by.id('phone')).sendKeys("9035888848");
        element(by.id('age')).sendKeys("30");
      //  element(by.cssContainingText('option', 'Male')).click();
      element(by.css("select.custom-select [value ='F']")).click();
     // element(by.css("select [name = 'salary'] [value ='2,00,000 - 5,00,000']")).click();
        element(by.id('pincode')).sendKeys("411057");
        element(by.id("acceptTnC")).click();
        element(by.xpath("//button[@type='submit']")).click();   
    });
});


describe('MockingHttp', function () {
    beforeEach(function () {
        browser.addMockModule('httpMocker', function () {
            angular.module('httpMocker', ['ngMockE2E'])
                .run(function ($httpBackend) {
                    $httpBackend.whenGET(
                        'http://jsonplaceholder.typicode.com/photos')
                        .respond([
                            {
                                albumId: 1,
                                id: 1,
                                title: "accusamus beatae ad",
                                url: "http://placehold.it/600/92c952",
                                thumbnailUrl: "http://placekitten.com/g/200/300"
                            }
                        ]);
                });
        });
    })
});
