var Calculator = function() {
};

Calculator.prototype.add = function(x, y) {
    return x + y;
};

Calculator.prototype.subtract = function(x, y) {
    return x - y;
};

Calculator.prototype.multiply = function(x, y) {
    return x * y;
};

Calculator.prototype.divide = function(x, y) {
    return x/y;
};

Calculator.prototype.reciprocal = function(x) {
    return 1/x;
};

Calculator.prototype.round = function(x) {
    return Math.round(x);
};
window.Calculator = Calculator;