// const template = document.getElementById('foo');
// console.log(template.innerHTML);

// class User {
//   constructor({ name, salary }) {
//     this.name = name;
//     this.salary = salary;
//   }
// }

// class SuperUser extends User {
//   constructor(props) {
//     super(props);
//   }
// }

// const user = new User({
//   name: 'Name',
//   salary: 'name'
// })

// const superUser = new SuperUser({
//   name: 'Name',
//   salary: 'name'
// })

// // console.log(user instanceof Object);
// console.log(superUser instanceof User);

// const currentDate = new Date();
// console.log(currentDate.getDay());

// function great() {
//   console.log('Hello');
// }

// function logger() {
//   console.log('I am logger');

//   setTimeout(() => {
//     console.log('Hello from async method');
//   }, 0)

//   great()
// }

// logger()

// const showTime = () => {
//   setTimeout(() => {
//     const date = new Date();
//     console.log(`${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`);

//     showTime();
//   }, 1000)
// }

// showTime()

// const interval = setInterval(() => {
//   const date = new Date();
//   console.log(`${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`);
// }, 1000)

// const timeout = setTimeout(() => {
//   clearInterval(interval)
// }, 3000)

// console.time('someFunction')
// for(let i = 0; i <= 1000000000; i++) {
//   const a = 5 + 5;
// }
// console.timeEnd('someFunction')

// clearTimeout(timeout)

// формат вывода
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

// const proposal = new Promise((resolve, reject) => {
//   const answer = prompt('Would you marry me');

//   if (answer === 'Yes' || answer === 'Y') {
//     resolve('Yes');
//   } else {
//     reject('No');
//   }
// });

// proposal
//   .then(result => {
//     answer = result;
//     console.log(answer);
//   })
//   .catch(error => {
//     answer = error;
//     console.log(answer);
//   });

const image = new Image();
image.src = 'https://media.gettyimages1.com/photos/young-man-at-sunset-picture-id496261146?s=612x612';

const promisifyImage = (imageTag) => {
  return new Promise((resolve, reject) => {
    imageTag.onload = () => resolve()
    imageTag.onerror = () => reject()
  })
}

// image.onload = () => {
//   console.log('image loaded');
// }
document.body.append(image);

promisifyImage(image)
  .then(() => console.log('image loaded'))
  .catch(() => console.log('Image not found'))