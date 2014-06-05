$( document ).ready(function() {



var form_body = $("#new_feedback");
var body_textarea = $("textarea#feedback_body");
var text_to_convert;



$(form_body).keyup(function(e) {
  var text = getRawText();
  markdownConverter(text);
});

var getRawText = function() {
  return $(body_textarea).val();
}

var markdownConverter = function(text) {
  console.log("text: " + text);

  checkForBold(text);
}

var checkForBold = function(text) {
  for (var i = 0; i < text.length; i++) {
    if (text[i] === "*") {
      console.log("HALLELUJAH");
    }

  }
}

// var getRawText = function() {
//   var input = $('')
// }



//  {

// getRawText = function

// var textToAppend = ConvertToMarkdown.new(rawText)
//                     -convertTomdown()

// updatePreview = function

});
