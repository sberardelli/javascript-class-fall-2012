describe('Calculator view', function() {
    var container, calculatorView;
    beforeEach(function() {
	container = $('<div/>');
	container.addClass('calculator');
	container.appendTo(document.body);

	container.append($("<div class='display'></div>"));
	container.append($("<button id='btn0'>0</button>"));
	container.append($("<button id='btn1'>1</button>"));
	container.append($("<button id='btn2'>2</button>"));
	container.append($("<button id='btnperiod'>.</button>"));
	container.append($("<button id='btnclear' class='clear'>C</button>"));

	var calculatorView = new CalculatorView();
	calculatorView.init('.calculator');
    });

    afterEach(function() {
	container.remove();
    });

    it('adds to the display when buttons are pressed', function() {
	container.find('#btn1').click();
	var displayText = container.find('.display').val();
	expect(displayText).toBe('1');
    });

    it('adds the correct value to the display', function() {
	container.find('#btn2').click();
	var displayText = container.find('.display').val();
	expect(displayText).toBe('2');
    });

    it('appends the value to the display', function() {
	container.find('#btn2').click();
	container.find('#btn1').click();
	var displayText = container.find('.display').val();
	expect(displayText).toBe('21');
    });

    it('appends the value to the display', function() {
	container.find('#btn2').click();
	container.find('#btnperiod').click();
	container.find('#btn1').click();
	container.find('#btnperiod').click();
	var displayText = container.find('.display').val();
	expect(displayText).toBe('2.1');
    });

    it('clears the display when clear button is pressed', function() {
	container.find('#btn2').click().click().click();
	container.find('#btnclear').click();

	var displayText = container.find('.display').val();
	expect(displayText).toBe('0');
    });

    it('handles multiple zeros', function() {
	container.find('#btn0').click().click().click();

	var displayText = container.find('.display').val();
	expect(displayText).toBe('0');
    });

    it('handles zeros plus period', function() {
	container.find('#btn0').click().click().click();
	container.find('#btnperiod').click().click().click();

	var displayText = container.find('.display').val();
	expect(displayText).toBe('0.');
    });
});
