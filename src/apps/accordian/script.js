document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordian-item");

  accordionItems.forEach((item) => {
    const pane = item.querySelector(".accordian-pane");
    const button = pane.querySelector("span");
    const panel = item.querySelector(".accordian-panel");

    button.addEventListener("click", () => {
      const isOpen = panel.classList.contains("accordian-panel-active");

      if (!isOpen) {
        manageClasses(button, panel, "add");
      } else {
        manageClasses(button, panel, "remove");
      }

      accordionItems.forEach((otherItem) => {
        const otherPanel = otherItem.querySelector(".accordian-panel");
        const otherButton = otherItem.querySelector("span");
        if (
          otherItem !== item &&
          otherPanel.classList.contains("accordian-panel-active")
        ) {
          manageClasses(otherButton, otherPanel, "remove");
        }
      });
    });
  });
});

function manageClasses(button, panel, situation) {
  let situations = {
    add: addClases,
    remove: removeClases,
  };

  return situations[situation](panel, button);
}

function addClases(elem1, elem2) {
  elem1.classList.add("accordian-panel-active");
  elem2.classList.add("transition-transform");
  elem2.classList.add("transform");
  elem2.classList.add("rotate-180");
}

function removeClases(elem1, elem2) {
  elem1.classList.remove("accordian-panel-active");
  elem2.classList.remove("transition-transform");
  elem2.classList.remove("transform");
  elem2.classList.remove("rotate-180");
}
