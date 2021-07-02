function sum(a: number, b: number) {
    return a + b;
}

describe('christmas ligths', () => {
    test('sum', () => {
        expect(sum(1, 2)).toBe(3);
    })
})
