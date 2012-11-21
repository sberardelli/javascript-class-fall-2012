var StringCalculatorView = function() {
};

StringCalculatorView.prototype.init = function(c) {
	var calculator = new StringCalculator();

    var wrapper = $(c);
    var display = wrapper.find('.display');
   
    wrapper.find('button.clear').click(function(ev) {
	display.val('0');
    });

    wrapper.find('button.add').click(function(ev) {
    	var oldValue = display.val();
    	var newValue = calculator.add(oldValue);
    	display.val(newValue);
    });
    
};



window.StringCalculatorView = StringCalculatorView;