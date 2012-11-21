describe('Calculator view', function () {
    var container, calculatorView, calculator;
    beforeEach(function () {
        container = $('<div/>');
        container.addClass('calculator');
        container.appendTo(document.body);

        container.append($("<div class='display'></div>"));
        container.append($("<button id='btn0' class='verbatim'>0</button>"));
        container.append($("<button id='btn1' class='verbatim'>1</button>"));
        container.append($("<button id='btn2' class='verbatim'>2</button>"));
        container.append($("<button id='btn3' class='verbatim'>3</button>"));
        container.append($("<button id='btn5' class='verbatim'>5</button>"));
        container.append($("<button id='btnplus' class='operator' data-operator='add'>+</button>"));
        container.append($("<button id='btnminus' class='operator' data-operator='subtract'>-</button>"));
        container.append($("<button id='btnmultiply' class='operator' data-operator='multiply'>x</button>"));
        container.append($("<button id='btndivide' class='operator' data-operator='divide'>/</button>"));
        container.append($("<button id='btnreciprocal' class='unaryoperator' data-operator='reciprocal'>/</button>"));
        container.append($("<button id='btnround' class='unaryoperator' data-operator='round'>/</button>"));
        container.append($("<button id='btnequal' class='equal'>=</button>"));
        container.append($("<button id='btnperiod' class='verbatim'>.</button>"));
        container.append($("<button id='btnclear' class='clear'>C</button>"));

        calculator = new Calculator();

        var calculatorView = new CalculatorView(calculator);
        calculatorView.init('.calculator');
    });

    afterEach(function () {
        container.remove();
    });

    it('adds to the display when buttons are pressed', function () {
        container.find('#btn1').click();
        var displayText = container.find('.display').val();
        expect(displayText).toBe('1');
    });

    it('adds the correct value to the display', function () {
        container.find('#btn2').click();
        var displayText = container.find('.display').val();
        expect(displayText).toBe('2');
    });

    it('appends the value to the display', function () {
        container.find('#btn2').click();
        container.find('#btn1').click();
        var displayText = container.find('.display').val();
        expect(displayText).toBe('21');
    });

    it('appends the value to the display', function () {
        container.find('#btn2').click();
        container.find('#btnperiod').click();
        container.find('#btn1').click();
        container.find('#btnperiod').click();
        var displayText = container.find('.display').val();
        expect(displayText).toBe('2.1');
    });

    it('clears the display when clear button is pressed', function () {
        container.find('#btn2').click().click().click();
        container.find('#btnclear').click();

        var displayText = container.find('.display').val();
        expect(displayText).toBe('0');
    });

    it('handles multiple zeros', function () {
        container.find('#btn0').click().click().click();

        var displayText = container.find('.display').val();
        expect(displayText).toBe('0');
    });

    it('handles zeros plus period', function () {
        container.find('#btn0').click().click().click();
        container.find('#btnperiod').click().click().click();

        var displayText = container.find('.display').val();
        expect(displayText).toBe('0.');
    });

    it('can add one and two', function () {
        container.find('#btn1').click();
        container.find('#btnplus').click();
        container.find('#btn2').click();
        container.find('#btnequal').click();

        var displayText = container.find('.display').val();
        expect(displayText).toBe('3');
    });

    it('can add one and zero', function () {
        container.find('#btn1').click();
        container.find('#btnplus').click();
        container.find('#btn0').click();
        container.find('#btnequal').click();

        var displayText = container.find('.display').val();
        expect(displayText).toBe('1');
    });

    it('clears display when pressing add', function () {
        container.find('#btn1').click();
        container.find('#btnplus').click();

        var displayText = container.find('.display').val();
        expect(displayText).toBe('');
    });

    it('can subtract three and two', function () {
        container.find('#btn3').click();
        container.find('#btnminus').click();
        container.find('#btn2').click();
        container.find('#btnequal').click();

        var displayText = container.find('.display').val();
        expect(displayText).toBe('1');
    });

    it('can multiply three and two', function () {
        container.find('#btn3').click();
        container.find('#btnmultiply').click();
        container.find('#btn2').click();
        container.find('#btnequal').click();

        var displayText = container.find('.display').val();
        expect(displayText).toBe('6');
    });

	it('can divide 33 by 3', function () {
        container.find('#btn3').click();
        container.find('#btn3').click();
        container.find('#btndivide').click();
        container.find('#btn3').click();
        container.find('#btnequal').click();

        var displayText = container.find('.display').val();
        expect(displayText).toBe('11');
    });

    it('returns Infinity when dividing 33 by 0', function () {
        container.find('#btn3').click();
        container.find('#btn3').click();
        container.find('#btndivide').click();
        container.find('#btn0').click();
        container.find('#btnequal').click();

        var displayText = container.find('.display').val();
        expect(displayText).toBe('Infinity');
    });

    it('returns 2 when reciprocal of 0.5 is pressed', function () {
        container.find('#btn0').click();
        container.find('#btnperiod').click();
        container.find('#btn5').click();
        container.find('#btnreciprocal').click();

        var displayText = container.find('.display').val();
        expect(displayText).toBe('2');
    });

    it('returns 4 when round of 3.5 is pressed', function () {
        container.find('#btn3').click();
        container.find('#btnperiod').click();
        container.find('#btn5').click();
        container.find('#btnround').click();

        var displayText = container.find('.display').val();
        expect(displayText).toBe('4');
    });


});
