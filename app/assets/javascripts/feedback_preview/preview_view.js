var PreviewView = function( element ){
    this.element = element;
};

PreviewView.prototype = {
    draw: function( newContent ){
        $( this.element ).html( newContent )
    }
};