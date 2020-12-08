var Translatebtn = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#input");
var output = document.querySelector("#output");


var url = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(txtinput) {
    return url + "?" + "text=" + txtinput
}

function onclick() {
    var inputText = txtInput.value; 

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText; 
           })
        .catch(errorHandler)
};

Translatebtn.addEventListener("click", onclick)