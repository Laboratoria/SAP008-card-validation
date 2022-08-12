const validator = {
    isValid: function (value) {
      const listValue = value.split("");
      const numberListValue = listValue.map(function (number) {
        return parseInt(number);
      });
      const reverseList = numberListValue.reverse();
      function isEven(index) {
        if (index % 2 === 0) {
          return true;
        }
      }
      const doubleNumber = reverseList.map(function (number, index) {
        if (isEven(index) === true) {
          return number;
        } else {
          return number * 2;
        }
      });
      const doubleNumberSum = doubleNumber.map(function (number) {
        if (number > 9) {
          return number - 9;
        } else {
          return number;
        }
      });
      const reducer = (accumulator, curr) => accumulator + curr; 
      const sum = doubleNumberSum.reduce(reducer) % 10 === 0;
      return sum;
    },
  
    maskify: function (value) {
      return value.slice(0, -4).replace(/./g, "#") + value.slice(-4);
    }
  };

export default validator;
