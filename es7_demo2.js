// includes()

// ES5


function calculateExponent(base, exponent)
{
    if (exponent === 1)
    {
        return base;
    }
    else
    {
        return base * calculateExponent(base, exponent - 1);
    }
}
 
console.log(calculateExponent(7, 3)); // 输出343
console.log(Math.pow(7, 3)); // 输出343



function power(base,exponent) {
	if(exponent === 1) {
		return base * 1
	} else {
		return base * power(base, exponent -1) 
	}
}

// ES7


console.log(7 ** 3)