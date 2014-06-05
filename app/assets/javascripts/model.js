function convertText(text) {
  this.text = text;
};

convertText.prototype.up = function() {
  var pending = this.text.toUpperCase();
  console.log(pending);
}

