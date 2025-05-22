const { add } = require(' ./index');

test('add 1 + 2 to equal 3' , () => {
    expect(add(1, 2)).tobe(3);
});

test('adds 5 + 7 to equal 12' , () => {
    expect(add(5,7)).toBe(12);
});