
browser.sidebarAction.setPanel({panel: 'https://copilot.microsoft.com'}); //replaces local iframe file with direct link to copilot
browser.browserAction.onClicked.addListener(() => {
    browser.sidebarAction.toggle();
});
