export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать не менее 2-х и не более 10-и букв');
    } else {
      this.name = name;
    }

    switch (type) {
      case 'Bowerman':
        this.type = type;
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
        this.type = type;
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
        this.type = type;
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Daemon':
        this.type = type;
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Undead':
        this.type = type;
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Zombie':
        this.type = type;
        this.attack = 10;
        this.defence = 40;
        break;
      default:
        throw new Error('неверный тип персонажа!');
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.level <= 0) {
      throw new Error('Нельзя повысить левел умершего!');
    }
    this.level += 1;
    this.attack += (this.attack * 0.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health < 0) {
      return;
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
