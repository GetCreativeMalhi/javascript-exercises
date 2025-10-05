const fibonacci = function(num) {
    let i = 2;
    num = +num;
    let fibonacciSum = 0;
    let firstNum = 0;
    let secondNum = 1;
    let arr =[0, 1];
    if(num < 0){
        return "OOPS";
    }
    while(i <= num) {
        fibonacciSum = firstNum + secondNum;
        arr.push(fibonacciSum);
        firstNum = secondNum;
        secondNum = fibonacciSum;
        i++;
    }
    return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
