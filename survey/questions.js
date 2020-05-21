function Question(question, num) {
  this.question = createElement("h1", num + " : " + question);
  this.yes = createButton("yes");
  this.no = createButton("no");
  this.num = num;

  this.no.style('width', '60px');
  this.no.style('height', '60px');

  this.yes.style('width', '60px');
  this.yes.style('height', '60px');

  this.show = function () {
    this.yes.hide();
    this.question.hide();
    this.no.hide();
  };
}
