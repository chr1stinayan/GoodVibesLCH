var flag = false
if (flag)
    chrome.runtime.sendMessage({type:'runAnalysis'});
else 
    chrome.runtime.sendMessage({type:'noAnalysis'});
