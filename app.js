'use strict';

//Changing the color of the box
/*
let square = document.querySelectorAll('li.fav-movie');
console.log(square)
let square = document.getElementsByClassName('square')
square[0].style.backgroundColor = 'blue';
console.log(square[0])
*/

//Changing the text in movie list

const lis = document.querySelectorAll('.fav-movie')

console.log(lis);

for (let i = 0; i < lis.length; i++) {
    console.log(lis[i]);
    lis[i].innerHTML += ' (new movie)'
};