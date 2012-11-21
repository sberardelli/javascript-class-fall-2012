var StringCalculator = function() {
};

StringCalculator.prototype.add = function(numString) {
	
	if(numString.length === 0) {
		return 0;
	} else {
		var result = 0;
		
		var normalizedString = numString.replace("\n",",");
		var items = normalizedString.split(",");
		for (var i=0;i<items.length;i++)
		{ 
			var item = parseInt(items[i]);
			result = result + item;
		};

		return result;
		
	}
	
};

window.StringCalculator = StringCalculator;