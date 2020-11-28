import mapsStyles from '../mapStyle.json';

const googleMapsScript = document.querySelector('#googleMaps');
const mapsRef = document.querySelector('.maps');

const requestUserPosition = () => {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(position => {
      resolve(position.coords);
    })
  })
}

const loadGoogleMaps = () => {
  return new Promise((resolve, reject) => {
    googleMapsScript.onload = () => resolve();
    googleMapsScript.onerror = () => reject();
  })
}

const initMap = async () => {
  try {
    await loadGoogleMaps()
    const { latitude, longitude } = await requestUserPosition();
    const userPosition = { lat: latitude, lng: longitude };

    const map = new google.maps.Map(mapsRef, {
      center: userPosition,
      zoom: 15,
      styles: mapsStyles
    });

    const marker = new google.maps.Marker({
      position: userPosition,
      map: map,
      icon: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9cd6ZWmGmsUXsLeQM1IUgn4WWWC317Lu6A&usqp=CAU',
      }
    });
  } catch(error) {
    console.error(error);
  }
}

initMap()

/** Подключение карты с использованием цепочки промисов */

// loadGoogleMaps()
//   .then(() => requestUserPosition())
//   .then(coords => {
//     const { latitude, longitude} = coords;

//     const map = new google.maps.Map(mapsRef, {
//       center: { lat: latitude, lng: longitude },
//       zoom: 15,
//       styles: mapsStyles
//     });
//   })

export default loadGoogleMaps;