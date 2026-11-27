// Runs on the pages listed in "matches" inside manifest.json
chrome.storage.sync.get({ enabled: true }, ({ enabled }) => {
  if (!enabled) return;
  console.log("Content script is running on:", location.href);
});
