// Step 5: Use the Abstract Factory

import { LightThemeFactory, DarkThemeFactory } from "./abstract-factory.js";

function renderUI(factory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render(); // Renders a button based on the theme.
  checkbox.render(); // Renders a checkbox based on the theme.
}

// Usage: Select a theme dynamically
const theme = "light"; // This could come from user settings

let factory;
if (theme === "light") {
  factory = new LightThemeFactory();
} else {
  factory = new DarkThemeFactory();
}

renderUI(factory);
