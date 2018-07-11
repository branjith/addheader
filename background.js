var url1 = "<all_urls>";

var props = [];

function getData(){
var prop = browser.storage.local.get();
prop.then(function(objs){
for (var key in objs) {
    if (objs.hasOwnProperty(key)) {
        props[key]=objs[key];
        console.log("DATA "+key + " -> " + objs[key]+" - "+props[key]);
        if(key == "urlPattern"){
            if(objs[key] == "*")
                url1 = objs[key];
            else
                url1 = "<all_urls>"
            }
        }
    }
    return props;
});
}


function onError(e) {
  console.error(e);
}

function logURL(requestDetails) {
	  console.log("Loading: " + requestDetails.url);
}

function addHeader(headers){
    
    getData();
    
    var name1 = "";
    var value1 = ""; 
    for (i = 1; i < 6; i++) { 
        name1 = props["hd"+i];
        value1 = props["vl"+i]; 
        console.log(name1+"::"+value1);
        if(name1 != "" && name1 != null)
            headers.requestHeaders.push({name:name1,value:value1});
    }
    props = [];
   return {requestHeaders: headers.requestHeaders};
}

browser.webRequest.onBeforeRequest.addListener(
		  logURL,{urls: [url1]}
);

browser.webRequest.onBeforeSendHeaders.addListener(addHeader,
    {urls: [url1]},
       ["requestHeaders", "blocking"]
);

//browser.storage.onChanged.addListener(getData);
