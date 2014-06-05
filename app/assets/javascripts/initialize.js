$(document).ready(function(){
  // var
  // newTextListener,
  // newRawTextGrabber,newRawTextConverter,
  // newConvertedTextPoster,newDisplayMarkdownPreview;

  // newRawTextGrabber = new rawTextGrabber(new rawTextConverter);
  // newTextListener = new textListener(newRawTextGrabber);
  // newRawTextConverter = new rawTextConverter;
  // newConvertedTextPoster = new convertedTextPoster;
  // new displayMarkdownPreview( new convertedTextPoster(
  //                             new rawTextConverter(
  //                             new textListener( new rawTextGrabber )
  // )));

  // var newRawTextGrabber = new rawTextGrabber();
  // var newTextListener = new textListener();
  // var newRawTextConverter = new rawTextConverter( newTextListener );

  $("#feedback-form").on("keydown", function(){
    console.log($(this));
  });

});
