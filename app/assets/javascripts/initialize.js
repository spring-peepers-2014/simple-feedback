$(document).ready(function(){
  var controller = new Controller()
  $('form textarea').keyup(function(){
    var rawText = $(this).val();
    controller.sawKeyUp(rawText)
  });




  // 1) on key up grab raw text(info)
  // 2) send info to js controller
  // 3) controller takes info and convert text*
  // 4) the converstion happens by calling on method in model js
});


