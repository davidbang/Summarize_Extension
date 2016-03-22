var window = ('object' === typeof(window));
var chrome = ('object' === typeof(chrome));
var text = "";
;(function() {
  console.log('POPUP SCRIPT WORKS!');
var AYLIENTextAPI = require('../../node_modules/aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "80a73a4d",
  application_key: "304653a77829a174564d0e3495c3bb9b"
});
//var text = "";

function summarize(tab, num) {
var t = "";
textapi.summarize({
  url: "http://www.theguardian.com/world/2016/mar/17/are-french-prisons-finishing-schools-for-terrorism",
  sentences_number: num
}, function(error, response) {
  if (error === null) {
    response.sentences.forEach(function(s) {
      console.log(s);
      var tmp = t;
      t = tmp.concat(s);
	console.log(tab);
    });
    alert(t);
    setTimeout(function(){console.log("hi");}, 20000);
  }
});
//alert(t);
//text = "<html><body>".concat(text);
 //text = text.concat ("</body></html>");
//alert(text);
}

setTimeout(summarize ("hi", 5), 10000);
//var form = require('./modules/form');
setTimeout(function(){alert(text);}, 1000);
//var fields = forms.fields;
//var validators = forms.validators;
//var my_form = forms.label 
//my_form.toHTML();
//function pass(url){
//   summarize(url, 6);
//}

  //chrome = ('object' === typeof(chrome));
//this.addEventListener('DOMContentLoaded', function() {
  //var checkPageButton = (this.document).getElementById('checkPage');
  //console.log("here2");
  //checkPageButton.addEventListener('click', function() {
    // chrome.tabs.getSelected(null, function(tab) {
    //summarize ("stackoverflow.com" , 4); 
   //summarize(url, 4);
     // console.log("tab");
     //window.open("http://www.w3schools.com");
    //});
  //);

//}, false);
//form.init(runner.go.bind(runner, msg));
})();


