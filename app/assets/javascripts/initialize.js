// $(function() {
//   new MarkdownWidget.Controller({
//     view: new MarkdownWidget.View(),
//     observableSelector: "textarea",
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
//   }).initEvents();
// });
// -get body text value
// -convert text to markdown
// -display converted text


$(function() {
    var inputSelector = "#feedback_body";
    var previewSelector = "#preview";
    $(inputSelector).keyup(function() {
    var formText = getTextFromForm('#feedback_body');
    var convertedText = convertTextToMarkdown(formText);
    displayConvertedText(previewSelector, convertedText);
});
});

function getTextFromForm(selector) {
    return $(selector).val();
}

function convertTextToMarkdown(text) {
    return text.toUpperCase();
}

function displayConvertedText(selector, text) {
    $(selector).append(text);
}


