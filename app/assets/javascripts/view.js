function View(text) {
  this.text = text;
};

View.prototype.printText = function() {
  console.log('hi');
  $('#preview p').text(this.text)
}


