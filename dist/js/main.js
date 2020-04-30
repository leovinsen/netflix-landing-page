const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

function selectItem(event) {
  removeShow();
  removeBorder();

  //Add border to current tab
  this.classList.add("tab-border");

  //Grab content item from the DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

//Listen for tab clicks
tabItems.forEach((item) => item.addEventListener("click", selectItem));
