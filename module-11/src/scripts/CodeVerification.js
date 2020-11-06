export default class CodeVerification {
  constructor(selector) {
    this.inputs = Array.from(document.querySelectorAll(selector));
    this.inputLength = this.inputs.length;
    this.handleInputEvent = this.handleInputEvent.bind(this);

    this.init();
  }

  handleInputEvent(event) {
    const { currentTarget } = event;
    const { value } = currentTarget;
    const index = this.inputs.indexOf(currentTarget);

    if (index === this.inputLength - 1) return;
    if (value.length > 1) {
      currentTarget.value = value.slice(-1);
    }

    this.inputs[index + 1].focus();
  }

  addEventListeners() {
    this.inputs.forEach(input => {
      input.addEventListener('input', this.handleInputEvent);
    });
  }

  init() {
    this.addEventListeners();
  }
}
