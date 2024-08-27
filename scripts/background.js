browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.create({
        url: "https://github.com/Eliott-Srl/anti-zbpu",
    });
});
