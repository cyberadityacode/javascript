/* function userName(){
    console.log('hi aditya');
}

// console.log(userName());
userName();

 */

/* function userName(user){
    if(!user){
        user= 'procodrr'
    }
    console.log(`hi ${user}`);
} */
    /* function userName(user='procodrr'){
        
        console.log(`hi ${user}`);
    } */

        function userName(user){
        
            console.log(`hi ${user || 'procodrr'}`);
        }    
// console.log(userName());
userName('aditya');
userName('dubey');
userName();
/* 
function addTwoNumber(a,b){
    console.log(a+b);
}
 */

function addTwoNumber(a,b){
    return a+b;
}


const result = addTwoNumber(1,2);

console.log(result); //undefined

let playFunction = addTwoNumber(addTwoNumber(10,20),addTwoNumber(10,30));

console.log(playFunction);