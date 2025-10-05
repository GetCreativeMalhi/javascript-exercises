const palindromes = function (str) {
    let newStr= str.toLowerCase().replace(/\W/g, "");
    const arr = newStr.split("");
    const comparisonStr = arr.join("");
    const comparisonStrReverse = arr.reverse().join("");
    return comparisonStr === comparisonStrReverse;
};

// Do not edit below this line
module.exports = palindromes;
