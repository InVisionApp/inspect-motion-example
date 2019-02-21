document.querySelector("#menu_btn").onclick = function(e) {
  toggleNav(e);
};

function toggleNav(e) {
  e.preventDefault();
  document.querySelector("#app").classList.toggle("expanded");
}