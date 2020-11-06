import CodeVerification from  './CodeVerification';
import imageList from './imageList.json';
import Gallery from './Gallery';
import { delay } from './helpers'

/** Импортируем генеоацию галереи  */
Gallery.sayHello();
const codeVerification = new CodeVerification('.code__input');
const gallery = new Gallery('.gallery', imageList);
gallery.renderGallery();

/** тест ф-ции дилей с использованием промисов  */
delay(3000)
  .then(() => {
    console.log('action after first delay');
  })
  .then(() => {
    console.log('action after removing listeners');
    return delay(5000)
  })
  .then(ms => {
    console.log('action after 5000 milliseconds');
    console.log(`last milliseconds ${ms}`)
  })

/** Работа с фокусом  */
const nameInput = document.querySelector('.name');
const ageInput = document.querySelector('.age');

nameInput.focus()

delay(3000).then(() => ageInput.blur())