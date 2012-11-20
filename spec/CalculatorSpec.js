describe('Calculator', function () {
    it('can add 2 and 2', function () {
        var calculator = new Calculator();
        var actual = calculator.add(2, 2);
        expect(actual).toBe(4);
    });

    it('can subtract 42 and 11', function () {
        var calculator = new Calculator();
        var actual = calculator.subtract(42, 11);
        expect(actual).toBe(31);
    });
});
