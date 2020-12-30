const intervalId = setInterval(() => {
  console.log("sending Analytics data...");
}, 2000);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
