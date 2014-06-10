// MarkdownWidget.Controller = function (opts) {
//   this.view = opts["view"];
//   this.observableSelector = opts.observableSelector;
//   this.markdownConverter = opts.markdownConverter || MarkdownWidget.MarkedStrategy;
// }

// MarkdownWidget.Controller.prototype = {
//   notifyTextChange: function (text) {
//     this.formattedText = this._transformText(text);
//     this.view.draw(this);
//   },

//   initEvents: function() {
//     var controller = this;

//     $(this.observableSelector)
//     .on('keyup', function(e){
//       controller.notifyTextChange($(this).val());
//     });
//   },

//   _transformText: function (text) {
//     return (new this.markdownConverter()).format(text);
//   }
// }
