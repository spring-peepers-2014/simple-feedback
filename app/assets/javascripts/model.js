function textConverter(text) {
  this.text = text;
};

textConverter.prototype.convert = function() {
  var pending = this.text.toUpperCase();
  console.log(pending);
}

