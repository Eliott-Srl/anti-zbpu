chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({
        url: "https://github.com/Eliott-Srl/anti-zbpu",
    });
});
