// function a(b){
//     console.log(b);
// }

// a('hii');
// a({userName:'adi',userAge:31});

// console.dir(a);

function a(b){
    // console.log(b);
    b();
}
// function sayHi(){
//     console.log('hiiii');
// }

// a(sayHi)

a(function(){
    console.log('hiiiii');
});