var background = chrome.extension.getBackgroundPage();


function changeHandler(){

chrome.bookmarks.create({'parentId': bookmarkNode.id,
                               'title': 'Extension bookmarks'},
                                                         function(newFolder) {
                                                                 console.log("added folder: " + newFolder.title);
                                                                   });
      
    
    
    /*    var formTabs = new Array();
    chrome.tabs.query({},function (tabs){
        for(var i=0;i<tabs.length;i++){
            formTabs[i]=tabs[i];
        }
        for(var i=0;i<formTabs.length;i++){
            if(formTabs[i]!=null)
                //background.console.log(formTabs[i].url);
                addBookmark(formTabs[i]);
            else
                background.console.log("??" + i);
        }
    });
*/

}
function addBookmark(input){
    if(!input.title || !input.url)
        return;



    background.console.log(input.title);
    background.console.log(input.url);
}

//Add a listener to know when the tool is disabled/enabled
document.getElementById("showAlert").addEventListener('change', changeHandler);


