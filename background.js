chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.active) {
    chrome.tabs.query({
        active: true,
          lastFocusedWindow: true
        }, function(tabs) {
  // and use that tab to fill in out title and url
      var tab = tabs[0];
        console.log(tab.url);

        });
      getJsonData(tab.url,function(response){
        alert(JSON.stringify(response));
      },function(error){
        alert(error);
      });

}
});



function getJsonData(site,callback,errorCallback){
  var searchUrl= "https://gateway-a.watsonplatform.net/calls/url/URLGetCombinedData?url=" +site+ "&outputMode=json&extract=keywords,entities,concepts&sentiment=1&maxRetrieve=3&apikey=c66dfe2fd34bf8fb2a3b15adc9e29cc97170366b"
  var x= new XMLHttpRequest();
  x.open("GET", searchUrl);
  x.responseType="json";
  x.onload=function(){
    var response=x.response;
    /*if (!response || !response.responseData || !response.responseData.results ||
        response.responseData.results.length === 0) {
      alert(JSON.stringify(response));
      errorCallback("No response from IBM WATSON FUCK");
      return;
    }*/
    callback(response);
  };
  x.onerror=function(){
    errorCallback("IBM WATSON IS BLEM");
  };
  x.send();

}
