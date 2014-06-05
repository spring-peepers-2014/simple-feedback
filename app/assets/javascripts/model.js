function textConverter(text) {
  this.text = text;
};

textConverter.prototype.convert = function() {
  var modifiedText = this.text.toUpperCase();
  return modifiedText
}

