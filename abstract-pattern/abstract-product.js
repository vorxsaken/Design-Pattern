// Step 1: Define Abstract Products

class Button {
  render() {
    throw new Error('Method "render()" must be implemented');
  }
}

class Checkbox {
  render() {
    throw new Error('Method "render()" must be implemented');
  }
}

export { Button, Checkbox };
