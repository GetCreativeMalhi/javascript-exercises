const removeFromArray = function(arr, ...arr2) {
    for(item of arr2){
        for(let i = 0; i < arr.length; i++){
            if (item === arr[i]){
                arr.splice(i, 1);
                i--;
            }
        }
    }
    
    return arr;
    
};

// Do not edit below this line
module.exports = removeFromArray;
