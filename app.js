/*  info reaching the damouse api */
const url = "https://api.datamuse.com/words?";

/* selecting page Elements */
const queryParams = "rel_rhy=";

const inputField = document.querySelector("#search");
const submitButton = document.querySelector("#submit");
const rhymeOutput = document.querySelector(".rhyme-output");



/* Ajax function*/
const getSuggession = () => {
    const wordQuery = inputField.value;
    const endpoint = url + queryParams + wordQuery;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
        }
    }
    xhr.open('GET', endpoint);
    xhr.send();
}

const displaySuggestions = (event) => {
    event.preventDefault();
    while (rhymeOutput.firstChild) {
        rhymeOutput.removeChild(rhymeOutput.firstChild);
    };
    getSuggession();
}
submitButton.addEventListener('click', displaySuggestions);