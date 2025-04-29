const fruits = ['apple','banana','cherry', 'peach','mango'];

//this anonymouse function will call for every element inside array
fruits.forEach(function(fruit){
    console.log(fruit);
})
console.log('-------');


//lets play with arrow
fruits.forEach((x) => console.log(x));
