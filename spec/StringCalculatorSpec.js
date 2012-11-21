describe('StringCalculator', function() {
	var stringCalculator;
	beforeEach(function(){
		stringCalculator = new StringCalculator();
	});
	
    it('returns 0 for when adding empty string', function() {
    	expect(stringCalculator.add("")).toBe(0);
    });
    
    it('returns the single number when adding single number', function() {
    	expect(stringCalculator.add("1")).toBe(1);
    });
    
    it('returns 6 when adding 1,2,3', function() {
    	expect(stringCalculator.add("1,2,3")).toBe(6);
    });
    
    it('returns 6 when adding 0,1,2,3,0', function() {
    	expect(stringCalculator.add("0,1,2,3,0")).toBe(6);
    });
    
    it('returns 6 when adding 1\n2,3', function() {
    	expect(stringCalculator.add("1\n2,3")).toBe(6);
    });
    
    
    
});