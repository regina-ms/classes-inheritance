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

/*
test.each([
    ['M', 'Bowerman'],
    ['Rargnastanya', 'Swordsman'],
  ])('should throw error about name', (characterName, type) => {
    expect(new Character(characterName, type)).
    toThrow(new Error('Имя должно содержать не менее 2-х и не более 10-и букв'));
  });
  */
