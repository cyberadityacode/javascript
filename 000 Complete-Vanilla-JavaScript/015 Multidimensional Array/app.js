const emptyMDArray = [[],];
const nameMDArray = [['aditya', 100],['siraditya',150]];

console.log(emptyMDArray);
console.log(nameMDArray);

const ticTacToe = [
    ['x', null,null],
    ['null', null,'o'],
    ['o', null,'x']
];

function checkBox(){
    const checkBox = document.getElementById('box-1');
    console.log(checkBox);
    checkBox.innerHTML = 'one'
}