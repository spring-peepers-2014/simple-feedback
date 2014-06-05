var TextProcessor = function(){};

TextProcessor.prototype = {
    processText: function( text ){
        return text.toUpperCase();
    }
};