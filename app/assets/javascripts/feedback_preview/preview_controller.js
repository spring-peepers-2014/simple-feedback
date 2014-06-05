var PreviewController = function( listener, domSelector, view ){
    this.listener = new listener( domSelector, this );
    this.processor = new TextProcessor();
    this.updater = view;
};

PreviewController.prototype = {
    processCapturedVal: function( value ){
        this.updater.draw( this.processor.processText( value ) )
    }
};