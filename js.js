

function showMenu() {
  const menu = document.querySelector('.nav-bar-inner');

  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}




const colorEl = document.querySelectorAll(".inp");
let lastClickedElem = null;

for (let i = 0; i < colorEl.length; i++) {
  colorEl[i].addEventListener("click", function () {
    if (lastClickedElem) {
      lastClickedElem.style.borderColor = "#807fd083";
    }
    this.style.borderColor = "#807fd0";
    lastClickedElem = this;
  });
}