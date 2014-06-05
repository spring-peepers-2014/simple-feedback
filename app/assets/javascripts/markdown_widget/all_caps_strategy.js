MarkdownWidget.AllCapsStrategy = function() {
}

MarkdownWidget.AllCapsStrategy.prototype = {
  format: function(text) {
    return text.toUpperCase();
  }
}
