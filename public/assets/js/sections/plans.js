const container = document.querySelector(".plans-table-mobile");
const [copilot, support] = container.querySelectorAll("section");

copilot.querySelector("button").addEventListener("click", () => {
  container.scrollLeft = container.clientWidth;
});

support.querySelector("button").addEventListener("click", () => {
  container.scrollLeft = 0;
});
