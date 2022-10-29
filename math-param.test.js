//The operation should return the snm of the two numbers

const { addition } = require('./addition');
const { multiple } = require('./multiple');

test.each([[2, 4, 6],[0, -5,-5],[222, 222, 444]])(
    'a + b = c',(a, b, expected) => {
        expect(addition(a, b)).toBe(expected)
    }
)

test.each([[30,10,300],[300, 150, 45000],[650, 325, 211250]])(
    'a * b = c',(a, b, expected) => {
        expect(multiple(a, b)).toBe(expected)
    }
)