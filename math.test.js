//The operation should return the snm of the two numbers

const { addition } = require('./addition');
const { multiple } = require('./multiple'); 

test('2 + 3 = 5', () => {
    expect(addition(2,3)).toBe(5)
})

test.skip('1 + 8 = 9', () => {
    expect(addition(1,8)).toBe(9)
})

test(' 30 * 10 = 300', () => {
    expect(multiple(30, 10)).toBe(300)
})

test(' 300 * 15 = 4500', () => {
    expect(multiple(300, 15)).toBe(4500)
})

test(' 650 * 325 = 211250', () => {
    expect(multiple(650, 325)).toBe(211250)
})

