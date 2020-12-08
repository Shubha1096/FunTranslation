var translatebtn = document.querySelector("#translate-btn");
var inputtext = document.querySelector("#input-Field")
var transloutput = document.querySelector("#output")

var url= "https://api.funtranslations.com/translate/minion.json"

function getURL(text) {

    return url +"?" + "text" + text
};

function onclick(){

    var textinput = inputtext.value;

    fetch(url(textinput))
    .then (response => response.json())
    .then (json =>{
        var translatedtext = json.contents.translated;
        transloutput.innertext= translatedtext;
    })
    translatebtn.addEventListener("click", onclick)
}