import './styles.scss';
import 'swiper/swiper.scss';
import Swiper from 'swiper';
import scrollTo from 'scroll-to';
import throttle from 'lodash.throttle';
import slideTemplate from './templates/slide.hbs';
import imagesList from './scripts/imageList';
import { MINUTES_IN_MILLISECONDS, HOURS_IN_MILLISECONDS } from './scripts/constants'

const imageListContainer = document.querySelector('.image-list');
const scrollToButton = document.querySelector('.scroll-to-btn');
const title = document.querySelector('.super-title');
const slides = imagesList.reduce((acc, image) => {
  return acc + slideTemplate(image)
}, '');

imageListContainer.innerHTML = slides;

const mySwiper = new Swiper('.slider', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 3
});

scrollToButton.addEventListener('click', () => {
  const topPosition = getElementScrollPosition(title);
  const topMargin = 20;

  scrollTo(0, topPosition - topMargin, {
    ease: 'in-expo',
    duration: 1500
  });
})

const getElementScrollPosition = element => {
  const { top, bottom, left, right } = element.getBoundingClientRect();
  const windowScrollTopSize = window.scrollY;
  console.log(`top: ${top}`);

  return windowScrollTopSize + top;
}

const btnScrollDetection = throttle(() => {
  getElementScrollPosition(scrollToButton)
}, 300)

// window.addEventListener('scroll', btnScrollDetection)