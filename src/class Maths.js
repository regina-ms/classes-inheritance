import Character from './class Character';

export default class Maths extends Character {
  constructor(name, type) {
    super(name, type);
    switch (type) {
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
      default:
        throw new Error('неверный тип персонажа!');
    }
  }

  set stoned(isStoned) {
    this.stone = isStoned;
  }

  get stoned() {
    return this.stone;
  }

  setAttack(distance) {
    this.attack *= ((100 - (distance - 1) * 10) / 100);

    if (this.stone) {
      this.attack = Math.ceil(this.attack - Math.log2(distance) * 5);
    }

    if (this.attack <= 0) {
      this.attack = 0;
    }
  }

  getAttack() {
    return this.attack;
  }
}
