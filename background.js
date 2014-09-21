var activate = 0;

function muteBackgroundTabs(){
    alert("we made it");

}
chrome.tabs.onActivated.addListener(function(info) {
    if(!activate)
        return;
    else
        muteBackgroundTabs();       
});

