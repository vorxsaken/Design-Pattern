import { Button, TextBox, Dropdown } from "./ui-components.js";

class UIComponentFactory {
  static createComponent(type) {
    switch (type) {
      case "button":
        return new Button();
      case "textbox":
        return new TextBox();
      case "dropdown":
        return new Dropdown();
      default:
        throw new Error("Unknown component type");
    }
  }
}

export { UIComponentFactory };
