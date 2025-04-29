function multiple(a,b){
    return a*b 
}

function multipleDefault(a=1,b=1){ //passed as default value
    return a*b 
}

multiple(2,undefined) //NaN
multipleDefault(2,undefined) //2
multipleDefault(2,'') //0 - empty string is falsy value which js consider as 0


