var question1;
var question2;
var question3;
var question4;
var question5;
var question6;
var question7;
var question8;
var question9;
var question10;
var scorestreak = 1;
var database;
var q1;
var q2;
var q3;
var q4;
var q5;
var q6;
var q7;
var q8;
var q9;
var q10;
var submit;
var hel;
var hem;
function setup() {
  hel = select(".email");
  hem = select(".review");
   submit = select(".submit");
  submit.mousePressed(goReview);

  database = firebase.database();
  question1 = new Question("Are now schools going good with their studies?", 1);
  question1.yes.mousePressed(peer1yes);
  question1.no.mousePressed(peer1no);

  question2 = new Question(
    "Does it is really important for the kids in school to have sports classes dialy??",
    2
  );
  question2.yes.mousePressed(peer2yes);
  question2.no.mousePressed(peer2no);

  question3 = new Question(
    "Does school should take up advance studies in the youngest ages of kids?",
    3
  );
  question3.yes.mousePressed(peer3yes);
  question3.no.mousePressed(peer3no);

  question4 = new Question(
    "Are schools now giving children their basic life values?",
    4
  );
  question4.yes.mousePressed(peer4yes);
  question4.no.mousePressed(peer4no);

  question5 = new Question(
    "Does schools should give comforts to the children more than they need? (like AC in class room, luxiriouus benches etc)",
    5
  );
  question5.yes.mousePressed(peer5yes);
  question5.no.mousePressed(peer5no);

  question6 = new Question(
    "Should question paper for the childen should be tough?",
    6
  );
  question6.yes.mousePressed(peer6yes);
  question6.no.mousePressed(peer6no);

  question7 = new Question(
    "Should childern have weekly or monthly activities and fieldtrips from schools?",
    7
  );
  question7.yes.mousePressed(peer7yes);
  question7.no.mousePressed(peer7no);

  question8 = new Question("Should schools seetup canteen facility?", 8);
  question8.yes.mousePressed(peer8yes);
  question8.no.mousePressed(peer8no);

  question9 = new Question(
    "Do you think schools should make children play all the games?",
    9
  );
  question9.yes.mousePressed(peer9yes);
  question9.no.mousePressed(peer9no);

  question10 = new Question(
    "Last question!!, Are now schools lacking some things what they requried!! write your answer in statement box!!",
    10
  );
  question10.yes.mousePressed(peer10yes);
  question10.no.mousePressed(peer10no);
}

function draw() {
 //console.log(scorestreak);
}

function peer1yes() {
  question1.show();
  q1 = "yes";
  scorestreak += 1;
}
function peer1no() {
  question1.show();
  q1 = "on";
  scorestreak += 1;
}

function peer2yes() {
  scorestreak += 1;
  q2 = "yes";
  question2.show();
}
function peer2no() {
  scorestreak += 1;
  q2 = "no";
  question2.show();
}

function peer3yes() {
  q3 = "yes";
  scorestreak += 1;
  question3.show();
}
function peer3no() {
  q3 = "no";
  scorestreak += 1;
  question3.show();
}

function peer4yes() {
  q4 = "yes";
  scorestreak += 1;
  question4.show();
}
function peer4no(){
  q4 = "no";
  scorestreak += 1;
  question4.show();
}



function peer5yes() {
  q5 = "yes";
  scorestreak += 1;
  question5.show();
}
function peer5no() {
  q5 = "no";
  scorestreak += 1;
  question5.show();
}



function peer6yes() {
  scorestreak += 1;
  q6 = "yes";
  question6.show();
}
function peer6no() {
  scorestreak += 1;
  q6 = "no";
  question6.show();
}



function peer7yes() {
  q7 = "yes";
  scorestreak += 1;
  question7.show();
}
function peer7no() {
  scorestreak += 1;
  question7.show();
  q7 = "no";
}

function peer8yes() {
  q8 = "yes";
  scorestreak += 1;
  question8.show();
}
function peer8no() {
  q8 = "no";
  question8.show();
  scorestreak += 1;
}

function peer9yes() {
  q9 =  "yes";
  scorestreak += 1;
  question9.show();
}
function peer9no() {
  q9 = "no";
  scorestreak += 1;
  question9.show();
}

function peer10yes() {
  q10 = "yes";
  scorestreak += 1;
  question10.show();
}
function peer10no() {
  q10 = "no";
  scorestreak += 1;
  question10.show();
}

function goReview() {
  if (hel.value() && hem.value() && scorestreak > 10) {
    var email = hel.value();
    var dat = hem.value();
    var ref = database.ref("/");

    var data = {
      email: email,
      hisReview: dat,
      q1 : q1,
      q2 : q2,
      q3 : q3,
      q4 : q4,
      q5 : q5,
      q6 : q6,
      q7 : q7,
      q8 : q8,
      q9 : q9,
      q10 : q10

    };
    ref.push(data);
    hel.hide();
    hem.hide();
    submit.hide();
    var h1 = createElement('h1', "your all done")
  } else {
    alert("please check if the email box is filled and you gave review");
  }
}
