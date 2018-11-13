//'use strict';

//Changing the color of the box
/*
let square = document.querySelectorAll('li.fav-movie');
console.log(square)
let square = document.getElementsByClassName('square')
square[0].style.backgroundColor = 'blue';
console.log(square[0])
*/

//Changing the text in movie list

/*
const lis = document.querySelectorAll('.fav-movie')

console.log(lis);

for (let i = 0; i < lis.length; i++) {
    console.log(lis[i]);
    lis[i].innerHTML += ' (new movie)'
};
*/
/*
//Using EventListener to change color of square
const input = document.getElementById('input-color');
const square = document.querySelector('.square');

//console.log('input:', input);
//console.log('square:', square);

//Event Handler
let inputHandler = function(e) {
    console.log('e:', e);
    square.style.backgroundColor = e.target.value;
};

// Event Listener
input.addEventListener('keyup', inputHandler);
*/

//Using EventListener to change text
/*
const inputText = document.getElementById('input-text');
const changeText = document.getElementById('change-text');

//console.log('changeText')

let inputTextHandler = (e) => {
    console.log('e:', e);
    if (e.keyCode == 13) {
        changeText.innerHTML = e.target.value;
    };
};
inputText.addEventListener('keyup', inputTextHandler);
*/

//Using EventListeneres for click events

const btn = document.getElementById('add-movie');
const inputMovie = document.getElementById('movie-text');
const ul = document.getElementById('movie-list');


let addMovie = (e) => {

    let movie = inputMovie.value;

    let li = document.createElement('li');
    li.textContent = movie;

    ul.apppendChild(li);
}



btn.addEventListener('click', addMovie)