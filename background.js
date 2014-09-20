var activate = 0;

chrome.tabs.onActivated.addListener(function(info) {
                        
    alert(activate);
});
