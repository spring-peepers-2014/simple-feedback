var TextProcessor = function(){};

TextProcessor.prototype = {
    processText: function( text ){
        return marked( text );
    }
};