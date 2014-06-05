MarkdownWidget.View = function(selector) {
  this.selector = selector || "#preview";
}

MarkdownWidget.View.prototype = {
  draw: function(formattedTextBearer) {
    $(this.selector)
    .empty()
    .append("<p>" + formattedTextBearer.formattedText + "</p>");
  }
};
