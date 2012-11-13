describe('Calculator view', function() {
    var container;
    beforeEach(function() {
	container = $('<div/>');
	container.addClass('calculator');
	container.appendTo(document.body);

	container.append($("<div class='display'></div>"));
	container.append($("<button id='btn1'>1</button>"));
	container.append($("<button id='btn2'>2</button>"));
    });

    afterEach(function() {
	container.remove();
    });

    it('adds to the display when buttons are pressed', function() {
	var calculatorView = new CalculatorView();
	calculatorView.init('.calculator');
	container.find('#btn1').click();
	var displayText = container.find('.display').val();
	expect(displayText).toBe('1');
    });

    it('adds the correct value to the display', function() {
	var calculatorView = new CalculatorView();
	calculatorView.init('.calculator');
	container.find('#btn2').click();
	var displayText = container.find('.display').val();
	expect(displayText).toBe('2');
    });

    it('appends the value to the display', function() {
	var calculatorView = new CalculatorView();
	calculatorView.init('.calculator');
	container.find('#btn2').click();
	container.find('#btn1').click();
	var displayText = container.find('.display').val();
	expect(displayText).toBe('21');
    });
});
