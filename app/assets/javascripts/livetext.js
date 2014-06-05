$(document).ready(function(){

	$('#feedback_body').keypress(function(e){
		
		var textValue = String.fromCharCode(e.charCode);

		$('#livetext').append(textValue);
	
	}); 





});


// var rawText {
// 	h1: '#',
// 	h2: '##',
// 	h3: '###',
// 	h4: '####',
// }