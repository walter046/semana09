const { add } = require('./index');

test('adds (1 + 2) * (5-3) to equal 6' , () => {
    expect(add(1, 2, 5, 3)).toBe(6);
});

test('adds (5 + 7) * (10-5) to equal 60' , () => {
    expect(add(5, 7, 10, 5)).toBe(60);
});