import { UIComponentFactory } from "./ui-component-factory.js";

// Usage
const button = UIComponentFactory.createComponent("button");
button.render(); // <button>Click me!</button>

const textBox = UIComponentFactory.createComponent("textbox");
textBox.render(); // <input type="text" placeholder="Enter text" />
