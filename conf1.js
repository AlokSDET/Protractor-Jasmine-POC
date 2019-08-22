exports.config = {
  framework: 'jasmine', //Type of Framework used 
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./fc_ui_test.js'],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(5000);
    browser.manage().window().maximize();
},
};

