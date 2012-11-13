var CalculatorView = function() {
};

CalculatorView.prototype.init = function(c) {
    var wrapper = $(c);
    var display = wrapper.find('.display');
    wrapper.find('button').click(function(ev) {
	var buttonText = $(ev.currentTarget).text();
	var oldValue = display.val();
	display.val(oldValue + buttonText);
    });
};

window.CalculatorView = CalculatorView;