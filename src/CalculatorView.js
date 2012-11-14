var CalculatorView = function() {
};

CalculatorView.prototype.init = function(c) {
    var wrapper = $(c);
    var display = wrapper.find('.display');
    wrapper.find('button').click(function(ev) {
	var buttonText = $(ev.currentTarget).text();
	var oldValue = display.val();
	if (oldValue.indexOf('.') === -1) {
	    display.val(oldValue + buttonText);
	} else if (buttonText !== '.') {
	    display.val(oldValue + buttonText);
	}
    });
    wrapper.find('button.clear').click(function(ev) {
	display.val('0');
    });
};

window.CalculatorView = CalculatorView;