// Step 4: Implement Concrete Factories for Each Theme

import { LightButton, LightCheckbox, DarkButton, DarkCheckbox } from "./concrete-product.js";
import { ThemeFactory } from "./abstract-factory-interface.js";

class LightThemeFactory extends ThemeFactory {
  createButton() {
    return new LightButton();
  }

  createCheckbox() {
    return new LightCheckbox();
  }
}

class DarkThemeFactory extends ThemeFactory {
  createButton() {
    return new DarkButton();
  }

  createCheckbox() {
    return new DarkCheckbox();
  }
}

export { LightThemeFactory, DarkThemeFactory };
