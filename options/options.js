const input = document.getElementById("name");
const status = document.getElementById("status");

chrome.storage.sync.get({ name: "" }, ({ name }) => {
  input.value = name;
});

document.getElementById("save").addEventListener("click", () => {
  chrome.storage.sync.set({ name: input.value }, () => {
    status.textContent = "Saved!";
    setTimeout(() => (status.textContent = ""), 1500);
  });
});
