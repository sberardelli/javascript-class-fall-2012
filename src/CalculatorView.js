var CalculatorView = function () {
};

var storage, operator;

CalculatorView.prototype.init = function (c) {
    var wrapper = $(c);
    var display = wrapper.find('.display');
    wrapper.find('button.verbatim').click(function (ev) {
        var buttonText = $(ev.currentTarget).text();
        var oldValue = display.val();
        var newValue = oldValue;
        if (oldValue.indexOf('.') === -1 || buttonText !== '.') {
            newValue = oldValue + buttonText;
        }
        while (newValue.length > 1 && newValue.indexOf('0') == 0) {
            if (newValue.length > 2 || buttonText !== '.') {
                newValue = newValue.substring(1);
            } else {
                break;
            }
        }
        display.val(newValue);
    });
    wrapper.find('button.clear').click(function (ev) {
        display.val('0');
    });

    wrapper.find('button.equal').click(function (ev) {
        var newValue = eval(storage + operator + display.val());
        display.val(newValue);
    });
    wrapper.find('button.operator').click(function (ev) {
        storage = display.val();
        operator = $(ev.currentTarget).text();
        display.val('');
    });
};

window.CalculatorView = CalculatorView;