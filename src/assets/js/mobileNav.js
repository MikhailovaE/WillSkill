const burger = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const body = document.body;

burger.addEventListener("click", (event) => {
  if (body.classList.contains("show-sidebar")) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  let mask = document.createElement("div");
  mask.addEventListener("click", closeSidebar);

  body.classList.add("show-sidebar");

  burger.classList.add('open')
}

function closeSidebar() {
  body.classList.remove("show-sidebar");
  burger.classList.remove('open')
}
