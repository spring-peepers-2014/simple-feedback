$(function() {
  new MarkdownWidget.Controller({
    view: new MarkdownWidget.View(),
    observableSelector: "textarea",
    /* This is a use of the strategy pattern, encapsulating
     * logic that can change.  We've wrapped the marked()
     * library in a class (MarkedStrategy) but we could use other
     * implementations easily because we could wrap them in
     * another strategy and choose to inject it via this
     * option.
     *
     * To experiment, un-comment out this line (and back on!)
     */
    //markdownConverter: MarkdownWidget.AllCapsStrategy
  }).initEvents();
});
