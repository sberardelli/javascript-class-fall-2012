describe('Calculator', function() {
    it('can add 2 and 2', function() {
	var calculator = new Calculator();
	var actual = calculator.add(2, 2);
	expect(actual).toBe(4);
    });
});
