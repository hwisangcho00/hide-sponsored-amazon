chrome.action.onClicked.addListener(async (tab) => {

  if (tab.url?.startsWith("chrome://")) return undefined;

  if (tab.url?.startsWith("https://www.amazon.com")) {
    console.log('Page uses History API and we heard a pushSate/replaceState.');
    await chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ["scripts/content.js"]
    })
    console.log("script execution should be complete")
  }
})