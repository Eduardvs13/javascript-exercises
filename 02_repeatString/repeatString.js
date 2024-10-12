const repeatString = function(string,number) {
    let newString="";
    if(number>=0){

    
    for(i=0;i<number;i++){
        newString+=string;
    }}
    else{
        newString="ERROR";
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
