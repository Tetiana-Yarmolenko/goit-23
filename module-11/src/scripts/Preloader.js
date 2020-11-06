import { delay } from './helpers'

export default class Preloader {
  constructor(selector) {
    this.preloader = document.querySelector(selector);
  }

  remove() {
    this.preloader.classList.add('preloader--removing');
    delay(600).then(() => this.preloader.remove())
  }
}