var btnTranslate = document.querySelector("#translate-btn");

btnTranslate.addEventListener("click", buttonClickHandler)

var txtInput = document.querySelector("#input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function ConversionURL(input) {
    return serverURL + "?" + "text=" + input
}

function buttonClickHandler() {
    var inputText = txtInput.value; 

  
    fetch(ConversionURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
           })
};