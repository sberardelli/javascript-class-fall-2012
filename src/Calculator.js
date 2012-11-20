var Calculator = function() {
};

Calculator.prototype.add = function(x, y) {
    return x + y;
};

Calculator.prototype.subtract = function(x, y) {
    return x - y;
};

window.Calculator = Calculator;