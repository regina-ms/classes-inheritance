import Character from '../class Character';

test.each([
  ['Mar', 'Bowerman'],
  ['Rar', 'Swordsman'],
  ['Par', 'Magician'],
  ['Kar', 'Daemon'],
  ['Nar', 'Undead'],
  ['Sar', 'Zombie'],
])('should craete a new character - name %s type %s', (characterName, type) => {
  const result = new Character(characterName, type);
  expect(result).toBeInstanceOf(Character);
});

test('should increase level, attack and health', () => {
  const ink = new Character('ink', 'Zombie');
  ink.damage(5);
  ink.levelUp();
  expect(ink.level).toBe(2);
  expect(ink.attack).toBe(12);
  expect(ink.health).toBe(100);
});

test('should lower health', () => {
  const ink = new Character('ink', 'Zombie');
  ink.damage(5);
  expect(ink.health).toBe(97);
});

test('shouldn`t lower health if health < 0', () => {
  const ink = new Character('ink', 'Zombie');
  ink.health = -1;
  ink.damage(5);
  expect(ink.health).toBe(-1);
});

test.each([
  ['M', 'Bowerman'],
  ['Rargnastanya', 'Swordsman'],
])('should throw error about name %s', (characterName, type) => {
  function checkLettersInName() {
    return new Character(characterName, type);
  }
  expect(checkLettersInName).toThrow(new Error('Имя должно содержать не менее 2-х и не более 10-и букв'));
});

test('should throw error about type', () => {
  function checkType() {
    return new Character('Rar', 'Ork');
  }
  expect(checkType).toThrow(new Error('неверный тип персонажа!'));
});

test('should throw error about level', () => {
  const ink = new Character('Rar', 'Undead');
  ink.health = 0;
  function checkLevel() {
    return ink.levelUp();
  }
  expect(checkLevel).toThrow();
});
