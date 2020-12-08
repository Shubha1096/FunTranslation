var Translatebtn = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#input");
var output = document.querySelector("#output");


var url = "https://api.funtranslations.com/translate/british.json"


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
};

Translatebtn.addEventListener("click", onclick)