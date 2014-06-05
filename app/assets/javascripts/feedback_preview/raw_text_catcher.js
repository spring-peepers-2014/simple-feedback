var RawTextCatcher = function( selector, delegate ){
    var self = this;
    this.selector = selector;
    this.delegate = delegate;

    $( this.selector ).on( 'keyup', function( e ){
        self.delegate.processCapturedVal( $( this ).val() )
    });
};

