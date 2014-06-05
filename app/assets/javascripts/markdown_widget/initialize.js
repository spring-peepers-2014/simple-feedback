function View() {
}

View.prototype = {
  draw: function(formattedTextBearer) {
    $("#preview")
    .empty()
    .append("<p>" + formattedTextBearer.formattedText + "</p>");
  }
};

function Controller(view) {
  this.view = view;
}

Controller.prototype = {
  notifyTextChange: function (text) {
    this.formattedText = this._transformText(text);
    this.view.draw(this);
  },

  _transformText: function (text) {
    return text.toUpperCase();
  }
}

controller = new Controller(new View())

$(function() {
  $("textarea")
  .on('keyup', function(e){
    controller.notifyTextChange($(this).val());
  });
});
