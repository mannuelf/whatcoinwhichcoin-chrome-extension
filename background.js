chrome.runtime.onInstalled.addListener(function() {
   chrome.storage.sync.set({ color: '#1B98E0'}, function() {
      console.log("The colour is blue blue blue")
   });
});