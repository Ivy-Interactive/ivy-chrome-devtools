// Create a new panel in Chrome DevTools
chrome.devtools.panels.create(
  "Ivy", // Panel title
  "icon-16.png", // Panel icon
  "panel.html", // Panel HTML page
  function(panel) {
    // Panel created callback
    console.log("Ivy DevTools panel created");
  }
); 