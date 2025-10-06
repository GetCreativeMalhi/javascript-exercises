const findTheOldest = function(arr) {
    const date = new Date();
    let oldest = arr.reduce((previousValue, currentValue) => {
        let previousYearOfDeath = previousValue.yearOfDeath || date.getFullYear();
        let currentYearOfDeath = currentValue.yearOfDeath || date.getFullYear();
        if((previousYearOfDeath - previousValue.yearOfBirth) > (currentYearOfDeath - currentValue.yearOfBirth)){
            return previousValue;
        }else{
            return currentValue;
        }
    });
   return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
