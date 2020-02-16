let changeColorButton = document.querySelector('.changeColor');

chrome.storage.sync.get('color', function (data) {
    changeColorButton.style.backgroundColor = data.color;
    changeColorButton.setAttribute(('value', data.color));
});


let changeColour = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};
changeColorButton.addEventListener('click', changeColour);