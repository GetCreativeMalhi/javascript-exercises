const sumAll = function(num1, num2) {
    if ((typeof(num1)!= "number") || (typeof(num2)!= "number") || num1 < 0 || num2 < 0 || num1 % 1 !== 0 || num2 % 1 !== 0){
        return "ERROR";
    } else { 
        let big;
        let small;
        if(num1 > num2){
            big = num1;
            small = num2;
            
        }else {
            big = num2;
            small = num1;
           
        } 
        let sum = 0;

        while(small <= big){
        sum += small;
        small++;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
