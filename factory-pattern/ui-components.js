class Button {
  render() {
    console.log("<button>Click me!</button>");
  }
}

class TextBox {
  render() {
    console.log('<input type="text" placeholder="Enter text" />');
  }
}

class Dropdown {
  render() {
    console.log("<select><option>Option 1</option></select>");
  }
}

export { Button, TextBox, Dropdown };
