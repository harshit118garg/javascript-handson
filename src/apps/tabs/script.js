let tabs = document.querySelectorAll("[data-tab]");
let panels = document.querySelectorAll("[data-tab-panel]");

// onclick event listener for tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedTab = tab.getAttribute("data-tab");

    const selectedPanel = Array.from(panels).find(
      (panel) => panel.getAttribute("data-tab-panel") === selectedTab
    ).getAttribute("data-tab-panel");

    // manage classes
    manageActiveTabPanel(selectedTab, selectedPanel);
  });
});

function manageActiveTabPanel(selectedTab, selectedPanel) {
  // remove tab-active class from all the tabs and apply the same on selectedTab
  tabs.forEach((tab) => {
    if (tab.getAttribute("data-tab") === selectedTab) {
      tab.classList.add("tab-active");
    } else {
      tab.classList.remove("tab-active");
    }
  });

  // remove tab-panel-active class from all the panels and apply the same on selectedPanel
  panels.forEach((panel) => {
    if (panel.getAttribute("data-tab-panel") === selectedPanel) {
      panel.classList.add("tab-panel-active");
    } else {
      panel.classList.remove("tab-panel-active");
    }
  });
}
