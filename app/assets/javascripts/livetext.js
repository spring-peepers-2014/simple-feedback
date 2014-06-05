$(document).ready(function(){
  $('#feedback_body').keypress(function(e){
      var textValue = String.fromCharCode(e.charCode);
      $('#updatedMarkdown').append(textValue);
  })
})



// var rawText {
//   h1: '#'
//   , h2: '##'
//   , h3: '###'
//   , bold: '*'
// }

// var charCodeConver = function
