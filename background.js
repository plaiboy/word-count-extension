chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
if (request.action === 'count') {
    chrome.tabs.executeScripts({file: 'content.js'})
}
})