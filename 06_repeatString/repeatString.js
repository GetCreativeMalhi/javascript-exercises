
const repeatString = function(word, num) {
    let string1 = "";
    if (num < 0){
        return "ERROR";
    } 
    for(let i = 1; i <= num; i++){
       
        string1 += word ;  
        
    } 
    
    return  string1;
};

// Do not edit below this line
module.exports = repeatString;
