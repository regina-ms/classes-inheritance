import Maths from '../class Maths';

test.each([
  ['Daemon'],
  ['Magician'],
])('should create a new Maths type %s', (type) => {
  const ink = new Maths('ink', type);
  expect(ink).toBeInstanceOf(Maths);
});

test('should throw a error', () => {
  expect(() => new Maths('ink', 'Zombie')).toThrow();
});

test('should set stone', () => {
  const ink = new Maths('ink', 'Daemon');
  ink.stoned = true;
  expect(ink.stone).toBeTruthy();
});

test('should return this.stone', () => {
  const ink = new Maths('ink', 'Daemon');
  ink.stoned = true;
  expect(ink.stoned).toBeTruthy();
});

test('should set attack depending on the distance wihtout stone', () => {
  const ink = new Maths('ink', 'Daemon');
  ink.setAttack(2);
  expect(ink.attack).toBe(22.5);
});

test('should set attack depending on the distance wiht stone', () => {
  const ink = new Maths('ink', 'Daemon');
  ink.stoned = true;
  ink.setAttack(2);
  expect(ink.attack).toBe(18);
});

test('shouldnt set a negative attack', () => {
  const ink = new Maths('ink', 'Daemon');
  ink.stoned = true;
  ink.setAttack(7);
  expect(ink.attack).toBe(0);
});

test('should return this.attack', () => {
  const ink = new Maths('ink', 'Daemon');
  expect(ink.getAttack()).toBe(25);
});
