import Z2 from './index';

describe('Math Expression', () => {
  it('should return sum when execute addition', () => {
    const z2 = new Z2();
    expect(z2.run('3 + 4')).toBe(7);
    expect(z2.run('3 + 4 + 15')).toBe(22);
  });

  it('should return correct value given mixed math expression', () => {
    const z2 = new Z2();
    expect(z2.run('3 + 4 * 2')).toBe(11);
    expect(z2.run('8 + 12 / 3 + 4 * 2')).toBe(20);
  });

  it('should return correct value given expression include parentheses', () => {
    const z2 = new Z2();
    expect(z2.run('(3 + 4) * 2')).toBe(14);
  });
});

describe('Var and Declaration', () => {
  it('should support var ', () => {
    const z2 = new Z2();
    expect(z2.run(`
      var a = 3;
      a * 9;
  `)).toBe(27);
    expect(z2.run(`
      var a = 3;
      var b = 4;
      a + b;
  `)).toBe(7);
  });

  it('should return correct value when var is changed', () => {
    const z2 = new Z2();
    expect(z2.run(`
      var a = 3;
      a = 5;
      a * 3;
  `)).toBe(15);
  });
});
