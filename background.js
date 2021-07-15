console.log("I am the 'BACKGROUND' ");

chrome.browserAction.onClicked.addListener(buttonClicked);
        function buttonClicked(tab){
            let msg={
                txt:"hello"
            }
        chrome.tabs.sendMessage(tab.id,msg);
            }

$.ajax({
    url:"http://localhost:80/",
    data:{test:"test data"},
    type:'POST',
    success:function(response){
        console.log('response:',response)
    },
    error:function(response){
        console.log('response:',response)
    }
});
chrome.runtime.onMessage.addListener(function(message,sender,sendresponse){
    console.log(message);
});

