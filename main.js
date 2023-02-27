const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy")

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
       quoteText.innerText = result.content;
       authorName.innerText = result.author;
       quoteBtn.innerText = "New Quote";
       quoteBtn.classList.remove("loading");
    });

}
function sound(){
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    speechSynthesis.speak(utterance);
}

function copy(){
    console.log(quoteText.innerText)
    navigator.clipboard.writeText(quoteText.innerText);
    
}

quoteBtn.addEventListener("click",randomQuote);