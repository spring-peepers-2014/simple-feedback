$( document ).ready(function() {



var form_body = $("#new_feedback");
var body_textarea = $("textarea#feedback_body");
var text_to_convert;



$(form_body).keyup(function(e) {
  var text = getRawText();
  $(".preview").text("");
  $(".preview").append(markdownConverter(text));
});

var getRawText = function() {
  return $(body_textarea).val();
}

var markdownConverter = function(text) {
  console.log("text: " + text);

  return checkForBold(text);
}

var checkForBold = function(text) {
  var converted;
  var edited_text = text;

  if (text.match(/(\*\*|__)(.*?)\1/)) {
    var match_array = text.match(/(\*\*|__)(.*?)\1/);
    var matched_text = match_array[0];
    var matched_word = match_array[2];
    var replaced_string = '<strong>' + matched_word + '</strong>';
    converted = edited_text.replace(/(\*\*|__)(.*?)\1/, replaced_string);
    console.log(converted);
  }
  if (converted) {
    console.log("RETURNTING CONVERTED: " + converted);
    return converted;
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


  // for (var i = 0; i < text.length; i++) {
  //   if (text[i] === "*") {
  //     console.log("HALLELUJAH");
  //   }

  // }

});
