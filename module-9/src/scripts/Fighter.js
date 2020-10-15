export class Fighter {
  constructor({ name, damage, health }) {
    this.damage = damage;
    this.name = name;
    this.health = health;
  }

  getDamage() {
    return this.damage;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  takeDamage(damage) {
    this.health -= damage;
  }
}