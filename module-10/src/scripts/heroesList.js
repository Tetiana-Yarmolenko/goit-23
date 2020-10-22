import heroesList from './heroes';
import heroListTemplate from '../templates/hero-list.hbs';

export default function() {
  const heroesContainer = document.querySelector('.hero-list-wrapper');

  const heroes = heroesList.map(hero => {
    const { id, localized_name, name } = hero;
    const heroName = name.replace('npc_dota_hero_', '');
    const imagePath = `http://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_full.png`;

    return {
      id,
      imagePath,
      localized_name
    }
  });

  heroesContainer.innerHTML = heroListTemplate(heroes);
}
