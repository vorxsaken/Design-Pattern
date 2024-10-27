// Step 2: Implement Concrete Products for Each Theme

import { Button, Checkbox } from "./abstract-product.js";

class LightButton extends Button {
  render() {
    console.log(
      '<button style="background-color: white; color: black;">Light Button</button>'
    );
  }
}

class LightCheckbox extends Checkbox {
  render() {
    console.log(
      '<input type="checkbox" style="accent-color: black;" /> Light Checkbox'
    );
  }
}

class DarkButton extends Button {
  render() {
    console.log(
      '<button style="background-color: black; color: white;">Dark Button</button>'
    );
  }
}

class DarkCheckbox extends Checkbox {
  render() {
    console.log(
      '<input type="checkbox" style="accent-color: white;" /> Dark Checkbox'
    );
  }
}

export { LightButton, LightCheckbox, DarkButton, DarkCheckbox };
