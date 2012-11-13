var CalculatorView = function() {
};

CalculatorView.prototype.init = function(c) {
    var wrapper = $(c);
    var display = wrapper.find('.display');
    wrapper.find('button').click(function() {
	display.val('1');
    });
};

window.CalculatorView = CalculatorView;