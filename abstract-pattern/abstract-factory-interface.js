// Step 3: Create Abstract Factory Interface

class ThemeFactory {
  createButton() {
    throw new Error('Method "createButton()" must be implemented');
  }

  createCheckbox() {
    throw new Error('Method "createCheckbox()" must be implemented');
  }
}

export { ThemeFactory };
