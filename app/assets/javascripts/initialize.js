$(document).ready(function(){
  $('form textarea').keyup(function(e){
    var rawText = $(this).val();
    var controller = new Controller(rawText)

  });




  // 1) on key up grab raw text(info)
  // 2) send info to js controller
  // 3) controller takes info and convert text*
  // 4) the converstion happens by calling on method in model js
});


