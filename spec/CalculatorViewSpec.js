describe('Calculator view', function() {
    var container;
    beforeEach(function() {
	container = $('<div/>');
	container.addClass('calculator');
	container.appendTo(document.body);

	container.append($("<div class='display'></div>"));
	container.append($("<button>1</button>"));
    });

    afterEach(function() {
	container.remove();
    });

    it('adds to the display when buttons are pressed', function() {
	var calculatorView = new CalculatorView();
	calculatorView.init('.calculator');
	container.find('button').click();
	var displayText = container.find('.display').text();
	expect(displayText).toBe('1');
    });
});
