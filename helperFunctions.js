/* formats response to look presentable */

const renderResponse = (res) => {
    /* handle if the response is falsely */
    if (!res) {
        console.log(res);
    }

    /* if the response comes back as a blan karray  */
    if (!res.length) {
        rhymeOutput.innerHTML = `<p>Try again!</p>
        <p>There we no suggesions found!</p>`;
        return;
    }

    // create an empty to contain the html strings;

    let wordList = [];

    for (let i = 0; i < res.length; i++) {

        // create a world list;
        wordList.push(`<li>${res[i].word}</li>`);
    }
    /* join the strings into one word */
    wordList = wordList.join("");
    /* manipulate response field to render modified response */
    rhymeOutput.innerHTML = `
    <p> The words which rhyme with ${inputField.value} are :</p>
    <ol>${wordList}</ol>`;
    return

}

// detect online  ofline status status

function hasNetwork(online) {
    const element = document.querySelector(".status");
    // Update the DOM to reflect the current status
    if (online) {
        element.classList.remove("offline");
        element.classList.add("online");
        element.innerText = "Online";
    } else {
        element.classList.remove("online");
        element.classList.add("offline");
        element.innerText = "Offline";
    }
}




window.addEventListener("load", () => {
    hasNetwork(navigator.onLine);

    window.addEventListener("online", () => {
        // Set hasNetwork to online when they change to online.
        hasNetwork(true);
    });

    window.addEventListener("offline", () => {
        // Set hasNetwork to offline when they change to offline.
        hasNetwork(false);
    });
});