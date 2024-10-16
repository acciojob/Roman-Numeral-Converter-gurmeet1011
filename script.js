function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result = '';  // Resultant Roman numeral

    // Iterate through the roman numerals and construct the output
    for (let i = 0; i < romanNumerals.length; i++) {
        const [symbol, value] = romanNumerals[i];

        // While the current value can be subtracted from num, append symbol and subtract value
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;  // Return the Roman numeral
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
