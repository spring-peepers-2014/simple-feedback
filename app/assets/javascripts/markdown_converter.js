$(document).ready(function(){
  var reader = new inputReader('#feedback_body');
  var converter = new markdownConverter();


  $('#feedback_body').keyup(function() {
    console.log( converter.textToConvert = reader.readText() )

    // console.log('pressed')
    // var convertedText = markdown.parse( readText(this) );
    // renderPreview('#markdown-preview', convertedText)

  });
});

// function readText(formId){
//   var rawText = $(formId).val();
//   return rawText;
// };

// function renderPreview(id, text){
//   $(id).html('<h3>Preview</h3>' + text);
// }


// TRYING TO BE OOJS?!?!???
// ========================================


function inputReader(htmlElement) {
  this.targetedElement = htmlElement;
};

inputReader.prototype.readText = function() {
  var rawText = $(this.targetedElement).val();
  return rawText;
};


function markdownConverter() {
  this.textToConvert = ""
};

markdownConverter.prototype.convertRawText = function() {
  return markdown.parse(this.textToConvert);
};

// var view = {
//   renderPreview: function(id, text){
//     $(id).html('<h3>Preview</h3>' + text);
//   }
// }


//#############################################################

var markdown = {
  parse: function(md) {

    // Titles
    md = md.replace(/^(#+)\s(.*)/gm, function(all, hashcount, title){
      var hc = hashcount.length;
      return '<h'+hc+'>'+title+'</h'+hc+'>';
    });
    md = md.replace(/^(.*)\n([=-]{2,})/gm, function(all, title, ttype){
      var hc = ttype[0] === '=' ? '1' : '2';
      return '<h'+hc+'>'+title+'</h'+hc+'>';
    });

    // Blockquotes and code blocks
    md = md.replace(/^>\s((.+\n{0,1})+)/gm, function(all, text){
      text = text.replace(/(\n>\s|\n)/g, '<br />\n');
      return '<blockquote>'+text+'</blockquote>';
    });
    md = md.replace(/^(((\t+|\s{2,}).*\n)+)/gm, function(all, text){
      console.log('---');
      console.log(text);
      console.log('---');
      text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;');
      text = text.replace(/\n/g, '<br />\n');
      return '<code>'+text+'</code>\n';
    });

    // Ordered and unordered lists
    md = md.replace(/^(\*\s.+\n?)+/gm, function(all){
      all = all.replace(/^\*\s(.*)\n?/gm, '<li>$1</li>');
      return '<ul>'+all+'</ul>';
    });
    md = md.replace(/^([0-9]+\.\s.+\n?)+/gm, function(all){
      all = all.replace(/^[0-9]+\.\s(.*)\n?/gm, '<li>$1</li>');
      return '<ol>'+all+'</ol>';
    });

    // Paragraphs
    md = md.replace(/(^|\n{2,})([^<])(.*)/g, '\n<p>$2$3</p>');

    // Bold, italics and links
    md = md.replace(/(\*\*|__)(.*)(\*\*|__)/g, '<b>$2</b>');
    md = md.replace(/[\*_](.*)[\*_]/g, '<i>$1</i>');
    md = md.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Remove extra line breaks etc
    md = md.replace('<code><br />', '<code>');

    return md;
  }
}



// ####################################################################

function mdToHtml(str) {
    var tempStr = str;
    while(tempStr.indexOf("**") !== -1) {
        var firstPos = tempStr.indexOf("**");
        var nextPos = tempStr.indexOf("**",firstPos + 2);
        if(nextPos !== -1) {
            var innerTxt = tempStr.substring(firstPos + 2,nextPos);
            var strongified = '<strong>' + innerTxt + '</strong>';
            tempStr = tempStr.substring(0,firstPos) + strongified + tempStr.substring(nextPos + 2,tempStr.length);
        //get rid of unclosed '**'
        } else {
            tempStr = tempStr.replace('**','');
        }
    }
     while(tempStr.indexOf("*") !== -1) {
        var firstPos = tempStr.indexOf("*");
        var nextPos = tempStr.indexOf("*",firstPos + 1);
        if(nextPos !== -1) {
            var innerTxt = tempStr.substring(firstPos + 1,nextPos);
            var italicized = '<i>' + innerTxt + '</i>';
            tempStr = tempStr.substring(0,firstPos) + italicized + tempStr.substring(nextPos + 2,tempStr.length);
        //get rid of unclosed '*'
        } else {
            tempStr = tempStr.replace('*','');
        }
    }
    return tempStr;
}

