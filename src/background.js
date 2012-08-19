(function(document){
  chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
      switch (request.name) {
      case "getPreferences":
        var value = localStorage["mode"];
        if (!value) { value = "default"; };
        sendResponse({mode: value});
        break;
      }
    }
  );
})(document);
