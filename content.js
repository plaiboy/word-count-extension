function countWords(text) {
    text = text.trim()

    const words = text.split(/\s+/);

    return words.length;

};

const sendWordCount = (wordCount) =>{
    const event = new CustomEvent("wordCount", {detail: wordCount});
    document.dispatchEvent(event);
}

document.addEventListener("DOMContentLoaded", function() {
    const pageCount = document.body.innerText;

    const wordCount = countWords(pageCount);
    sendWordCount(wordCount);
})