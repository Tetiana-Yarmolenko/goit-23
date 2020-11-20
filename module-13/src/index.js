import './styles.scss';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { defaults, alert } from '@pnotify/core';
import { registerUser, fetchApartmentsList } from './scripts/bookingApi';
import apartmentsListTemplate from './templates/apartmentsList.hbs';
import axios from 'axios';

defaults.styling = 'material';
defaults.icons = 'material';

const registerFormRef = document.querySelector('.register-form');
const apartmentsRef = document.querySelector('.apartments');
const handleRegisterSubmit = event => {
  event.preventDefault();

  const { currentTarget: form } = event;
  const formData = new FormData(form);
  const body = {};

  formData.forEach((value, key) => {
    body[key] = value;
  });

  registerUser(body)
    .then(({ data }) => console.log(data))
    .catch(error => {
      alert({
        text: error.response.data.message,
      });
    });
};

/** Через промисы */
// const renderApartmentsList = () => {
//   fetchApartmentsList()
//     .then(response => {
//       const { data } = response;
//       apartmentsRef.innerHTML = apartmentsListTemplate(data);
//     })
// }

/** Async, await */

const renderApartmentsList = async () => {
  try {
    const response = await fetchApartmentsList();
    const { data } = response;

    apartmentsRef.innerHTML = apartmentsListTemplate(data);
  } catch (error) {
    alert({
      text: error.response.data.message,
    });
  }
};

registerFormRef.addEventListener('submit', handleRegisterSubmit);
renderApartmentsList();

axios('https://pixabay.com/api/?key=19116097-91cfda2f798a07cacf5b2db64&q=yellow+flowers&image_type=photo&pretty=true&page=10&per_page=10')
  .catch(error => {
    console.dir(error)
  })