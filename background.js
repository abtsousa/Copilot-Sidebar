
browser.sidebarAction.setPanel({panel: 'https://copilot.microsoft.com'});
browser.browserAction.onClicked.addListener(() => {
    browser.sidebarAction.toggle();
});
