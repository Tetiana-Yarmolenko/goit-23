import './styles.scss';
import 'swiper/swiper.scss';
import initGallery from './scripts/gallery';
import initHeroList from './scripts/heroesList';
import user from './scripts/user.json';
import { get as getItem, add as saveItem } from './scripts/localStorageApi';

/** вынес инициализацию галереи в отдельный файл  */
initGallery();

/** отрисовываем список героев */
initHeroList();

/** если импортируем файл .json то вебпак автоматически превращает его в js объект */
console.log(user);

// const jsonObject = `{
//   "name": "Alex",
//   "salary": 200
// }`
// const obj = JSON.parse(jsonObject);

// console.log(obj.name);
// console.log(JSON.stringify(obj));

// const name = 'First name';
// localStorage.setItem('name', name);
// const hero = {
//   name: 'Zoro',
//   salary: 0
// }

/** используем наш локалсторадж апи для сохранения или чтения данных */
saveItem('zoro', hero);

const zoro = getItem('zoro');
console.log(zoro);
