describe('Sample test suite', function() {
	it('handling dropdown test case', function(){
		var appUrl= "http://juliemr.github.io/protractor-demo/";
		browser.get(appUrl);
		element(by.model('first')).sendKeys('3');
		element.all(by.options('value for (key, value) in operators')).get(3).click();
		element(by.model('second')).sendKeys('5');
		element(by.buttonText('Go!')).click();
		browser.sleep('5000');
		
	});
});
