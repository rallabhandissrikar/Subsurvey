var question;
var foo;
function setup() {
    noCanvas();
    var lem = new p5.Speech();
    lem.speak('welcome to the Subsurveys!! click in link below to go to surveys');
    foo = new p5.Speech(); // speech synthesis object
}

 

function draw() {
    
}

function mousePressed() {
    foo.setVoice('Google UK English Male')
    foo.speak('welcome to subsurveys, this voice is coming from the website,this is a survey about schools. You see a box in the top, fill your email there, after the submit button you have your questions!! answer the questions and complete the survey!!, all the best!!'); // say something
}
/*
Microsoft Anna - English (United States)
Google Deutsch
Google US English
Google UK English Female
Google UK English Male
Google español
Google español de Estados Unidos
Google français
Google हिन्दी
Google Bahasa Indonesia
Google italiano
Google 日本語
Google 한국의
Google Nederlands
Google polski
Google português do Brasil
Google русский
Google 普通话（中国大陆）
Google 粤語（香港）
Google 國語（臺灣）
*/