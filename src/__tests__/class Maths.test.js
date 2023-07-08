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

test('should set distance', () => {
  const ink = new Maths('ink', 'Daemon');
  ink.setDistance(2);
  expect(ink.distance).toBe(2);
});

test('should return distance', () => {
  const ink = new Maths('ink', 'Daemon');
  ink.setDistance(2);
  expect(ink.getDistance()).toBe(2);
});

test('should set attack', () => {
  const ink = new Maths('ink', 'Daemon');
  ink.setAttack(100);
  expect(ink.attack).toBe(100);
});

test('should return attack without stone', () => {
  const ink = new Maths('ink', 'Daemon');
  ink.setAttack(100);
  ink.setDistance(2);
  expect(ink.getAttack()).toBe(90);
});

test('should return attack with stone', () => {
  const ink = new Maths('ink', 'Daemon');
  ink.setAttack(100);
  ink.setDistance(2);
  ink.stoned = true;
  expect(ink.getAttack()).toBe(85);
});

test('shouldnt return a negative attack', () => {
  const ink = new Maths('ink', 'Daemon');
  ink.setAttack(25);
  ink.setDistance(7);
  ink.stoned = true;
  expect(ink.getAttack()).toBe(0);
});
