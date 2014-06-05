function Controller(){

}

Controller.prototype.sawKeyUp = function(rawText) {
  // rawText.toUpperCase();
  var converter = new textConverter(rawText);
  converter.convert();
}

