var CalculatorView = function() {
};

CalculatorView.prototype.init = function(c) {
    var wrapper = $(c);
    var display = wrapper.find('.display');
    wrapper.find('button').click(function(ev) {
	var buttonText = $(ev.currentTarget).text();
	var oldValue = display.val();
	var newValue = oldValue;
	if (oldValue.indexOf('.') === -1 || buttonText !== '.') {
	    newValue = oldValue + buttonText;
	}
	while (newValue.length > 1 && newValue.indexOf('0') == 0) {
	    newValue = newValue.substring(1);
	}
	display.val(newValue);
    });
    wrapper.find('button.clear').click(function(ev) {
	display.val('0');
    });
};

window.CalculatorView = CalculatorView;