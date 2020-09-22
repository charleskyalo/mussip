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

    for (let i = 0; i < Math.min(res.length, 10); i++) {

        // create a world list;
        wordList.push(`<li>${res[i].word}</li>`);
    }
    /* join the strings into one word */
    wordList = wordList.join("");
    console.log(wordList);

    /* manipulate response field to render modified response */
    rhymeOutput.innerHTML = `
    <p> you might be interested in:</p>
    <ol>${wordList}</ol>`;
    return

}