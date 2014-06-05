function Controller(){

}

Controller.prototype.sawKeyUp = function(rawText) {
  // rawText.toUpperCase();
  var converter = new textConverter(rawText);
  var data = converter.convert();
  var preview = new View(data);
  preview.printText()
}

