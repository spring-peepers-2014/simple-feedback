MarkdownWidget.MarkedStrategy = function() {
}

MarkdownWidget.MarkedStrategy.prototype = {
  format: function(text) {
    return marked(text);
  }
}
