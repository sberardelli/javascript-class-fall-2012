describe('StringCalculator view', function() {
    var container, stringCalculatorView;
   
    beforeEach(function() {
	container = $('<div/>');
	container.addClass('stringCalculator');
	container.appendTo(document.body);

	container.append($("<div class='display'></div>"));
	container.append($("<button id='btnclear' class='clear'>C</button>"));
	container.append($("<button id='btnAdd' class='add'>+</button>"));

	var stringCalculatorView = new StringCalculatorView();
	stringCalculatorView.init('.stringCalculator');
    });

    afterEach(function() {
	container.remove();
    });

    it('clears the display when clear button is pressed', function() {
	container.find('#btnclear').click();

	var displayText = container.find('.display').val();
	expect(displayText).toBe('0');
    });

    it('adds the value in the display when + button is clicked', function() {
    	container.find('.display').val("1,2,3");
    	var displayValue = container.find('.display').val();
    	container.find('#btnAdd').click();
    	var newValue = container.find('.display').val();
    	expect(newValue).toBe('6');
    });


});
