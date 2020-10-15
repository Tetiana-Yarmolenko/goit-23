export default class MortalCombat {
  constructor(firstPlayer, secondPlayer) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
  }

  fight() {
    const firstPlayerDamage = this.firstPlayer.getDamage();
    const secondPlayerDamage = this.secondPlayer.getDamage();

    while(this.firstPlayer.health > 0 && this.secondPlayer.health > 0) {
      this.firstPlayer.takeDamage(secondPlayerDamage);
      this.secondPlayer.takeDamage(firstPlayerDamage);

      console.log(this.firstPlayer.health, this.secondPlayer.health);
    }

    if(this.firstPlayer.health > 0) {
      console.log('First player win');
      return;
    }

    if(this.secondPlayer.health > 0) {
      console.log('Second player win');
      return;
    }

    console.log('Friendship');
  }
}