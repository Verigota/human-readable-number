module.exports = function toReadable (number) {
  const numbers = {
    '0' : 'zero',
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine',
    '10' : 'ten',
    '11' : 'eleven',
    '12' : 'twelve',
    '13' : 'thirteen',
    '14' : 'fourteen',
    '15' : 'fifteen',
    '16' : 'sixteen',
    '17' : 'seventeen',
    '18' : 'eighteen',
    '19' : 'nineteen',
    '20' : 'twenty',
    '30' : 'thirty',
    '40' : 'forty',
    '50' : 'fifty',
    '60' : 'sixty',
    '70' : 'seventy',
    '80' : 'eighty',
    '90' : 'ninety',
    '100' : 'hundred',  
  }

  if (number === 100) {
      return 'one hundred';
  }
  let result = [];
  const numLength = number.toString().length;
  if (numbers.hasOwnProperty(number)) {
    result.push(numbers[number]);
    return result.join(' ');
  }
  
  let i = numLength - 1;
  let x = Math.floor(number / Math.pow(10, i));
  let y = number % Math.pow(10, i);
    if (i === 2) {
        result.push(numbers[x]);
        result.push(numbers[100]);
        if (y === 0) {
            return result.join(' ');
        }
    } else {
        result.push(numbers[x*10])
    }

    if (numbers.hasOwnProperty(y))  {
        result.push(numbers[y]);
    } else {
        result.push(numbers[y - y%10]);
        result.push(numbers[y%10]);
    }
    return result.join(' ');
}
