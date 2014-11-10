//TODO: save the number of scrolls here.
//      when the onConnect listener triggers,
//      send that saved value over.

chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(content) {
                    console.log("Connected ..." + content);
                        });
});
chrome.extension.onMessage.addListener(
          function(request, sender, sendResponse) {
                  console.log(sender.tab ?
                              "from a content script:" + sender.tab.url :
                                      "from the extension");
          });
