chrome.action.onClicked.addListener(async (tab) => {

  if (tab.url?.startsWith("chrome://")) return undefined;

  if (tab.url?.startsWith("https://www.amazon.com")) {
    await chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ["scripts/content.js"]
    })
  }
})