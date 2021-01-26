const collapsibles = document
  .querySelectorAll(".collapsible")
  .forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("collapsible--expanded");
    });
  });
