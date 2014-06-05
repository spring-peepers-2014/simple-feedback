function textListener( rawTextGrabberFunction ){
  document.getElementById("feedback-form").addEventListener('keydown',
    function(event){
      rawTextGrabberFunction
    };
  });
};

function rawTextGrabber(){
  var raw_text = document.getElementById("feedback-form").value;
  return raw_text
};


//
function convertedTextPoster( convertedText, displayTextFunction ){
  displayTextFunction( convertedText );
};
