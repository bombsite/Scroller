var background = chrome.extension.getBackgroundPage();

//Listen to whether if we want the extension to be activated or not
function changeHandler(){
    if(showAlert.checked){
        background.activate=1;
    }
    else{
        background.activate=0;
        //TODO: Should also un-mute all the background tabs
    }
}



//Add a listener to know when the tool is disabled/enabled
document.getElementById("showAlert").addEventListener('change', changeHandler);
//Add a listener to know when the tab is changed
chrome.tabs.onActivated.addListener(function(activeInfo) {
      // how to fetch tab url using activeInfo.tabid
    alert("HI");     
    console.log("does this work");
}); 
