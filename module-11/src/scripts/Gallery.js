import { promisifyImage } from './helpers';
import Preloader from './Preloader';

export default class Gallery {
  constructor(selector, items) {
    this.$el = document.querySelector(selector);
    this.items = items;
    this.images = [];
    /** Создаем экземпляр класса прелоадер дабы можно было его скрыть когда надо */
    this.preloader = new Preloader('.preloader');
  }

  static sayHello() {
    console.log('Hello');
  }

  createImageView(image) {
    const { src, alt, title } = image;
    const img = new Image();
    img.src = src;
    img.alt = alt;
    img.title = title;
    img.classList.add('gallery-item');

    return img;
  }

  handleAllImagesLoading() {
    const imagePromiseList = this.images.map(image => {
      return promisifyImage(image);
    });

    Promise.all(imagePromiseList).then(result => {
      this.preloader.remove();
    });
  }

  renderGallery() {
    this.images = this.items.map(image => {
      return this.createImageView(image);
    });
    /** добавляем все теги картинок к контенеру  */
    this.$el.append(...this.images);
    this.handleAllImagesLoading();
  }
}
