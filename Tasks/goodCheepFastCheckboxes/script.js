const toggles = document.querySelectorAll(".toggle");

const good = document.querySelector("#good");
const fast = document.querySelector("#fast");
const cheep = document.querySelector("#cheep");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(theClickedOne) {
  if (good.checked && cheep.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }

    if (cheep === theClickedOne) {
      good.checked = false;
    }

    if (fast === theClickedOne) {
      cheep.checked = false;
    }
  }
}
