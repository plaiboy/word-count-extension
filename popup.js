document.addEventListener('DOMContentLoaded', function() {
    var wordCountButton = document.getElementById('wordCountButton');
    wordCountButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'count' });
      });
    });

   
  });

  function updateWordCount(wordCount) {
    const wordCountElement = document.getElementById('wordCount');
    wordCountElement.textcontent = "word Count: " + wordCount;
  }

  function handleWordCount(event) {
    const wordCount = event.detail;
    updateWordCount(wordCount);
  }
document.addEventListener("wordCount", handleWordCount);

chrome.tabs.query({active: true, currentWindow: true }, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {action: "getwordCount"});
})


  