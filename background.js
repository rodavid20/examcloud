browser.commands.onCommand.addListener(function (command) {
    const direction = command.split('-')[1];
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        browser.tabs.sendMessage(tabs[0].id, { direction });
		
    });
});