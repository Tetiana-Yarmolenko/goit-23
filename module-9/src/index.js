import './style/index.scss';
import picture from './img/pict.webp';
import { Fighter } from './scripts/Fighter';
import MortalCombat from './scripts/MortalCombat';
// import userTemplate from './templates/user.hbs';
// import defaultUser, { User as SuperUser } from './scripts/User';
// import * as allScripts from './scripts/User';

// const user = new SuperUser({
//   name: 'John',
//   age: 10
// })

// const userView = userTemplate(user);

const motaro = new Fighter({
  name: 'Motaro',
  damage: 100,
  health: 1200
})

const jax = new Fighter({
  name: 'Jax',
  damage: 110,
  health: 1100
});

const mortalCombat = new MortalCombat(motaro, jax);
mortalCombat.fight();

