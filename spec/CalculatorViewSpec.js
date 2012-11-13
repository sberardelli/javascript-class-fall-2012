describe('Calculator view', function() {
    var container;
    beforeEach(function() {
	container = $('<div/>');
	container.addClass('calculator');
	container.appendTo(document.body);

	container.add($("<div class='display'></div>"));
	container.add($("<button>1</button>"));
    });

    afterEach(function() {
	container.remove();
    });

    it('adds to the display when buttons are pressed', function() {
	var calculatorView = new CalculatorView();
	calculatorView.init('.calculator');
	var displayText = container.find('.display').text();
	expect(displayText).toBe(1);
    });
});
