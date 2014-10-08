var thevalue;

$(window).bind('mousewheel', function(event) {
    var changeValue;
    chrome.storage.local.get('value',function(result){
        changeValue = result.value;
        console.log('init: '+changeValue);

        if (event.originalEvent.wheelDelta >= 0) {
            console.log('Scroll up');
        }
        else {
            console.log('Scroll down');
        }
        changeValue+=1;
        chrome.storage.local.set({'value': changeValue},function(){
            console.log('final: '+changeValue);
        });
    });
});

$( document ).ready(function() {
        chrome.storage.local.get('value',function(result){
            console.log('init'+result.value);
        });
/* This code is unnecessary since the value is set to 0 by default
        chrome.storage.local.set({'value': 0}, function() {
           // Notify that we saved.
            console.log('value set to 0');
        });
*/
});
