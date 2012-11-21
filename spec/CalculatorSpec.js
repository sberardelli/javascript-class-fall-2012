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
 
    it('can multiply 3 and 2', function () {
        var calculator = new Calculator();
        var actual = calculator.multiply(3, 2);
        expect(actual).toBe(6);
    });

    it('can divide 48 and 8', function () {
        var calculator = new Calculator();
        var actual = calculator.divide(48, 8);
        expect(actual).toBe(6);
    });

    it('returns Infinity for division by 0', function () {
        var calculator = new Calculator();
        var actual = calculator.divide(8, 0);
        expect(actual).toBe(Infinity);
    });

    it('returns 4 for round of 3.5', function () {
        var calculator = new Calculator();
        var actual = calculator.round(3.5);
        expect(actual).toBe(4);
    }); 

});
