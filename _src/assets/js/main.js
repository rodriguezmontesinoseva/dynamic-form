// 'use strict';

console.log('>> Ready :)');

// // me genera un input
// const newInput = document.createElement('input');
// //const newContent = document.createTextNode('Add to favourites');
// newInput.appendChild(newContent);

// // me pinta un input
// const dForm = document.querySelector('.main-form');
// dForm.appendChild(newInput);

var dForm = document.createElement("form");
dForm.setAttribute('method', "post");
dForm.setAttribute('class', "main-form");

var i = document.createElement("input"); //input element, text
i.setAttribute('type', "text");
i.setAttribute('name', "username");

var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type', "submit");
s.setAttribute('value', "Submit");

dForm.appendChild(i);
dForm.appendChild(s);



//and some more input elements here
//and dont forget to add a submit button

//document.getElementsByTagName('body')[0].appendChild(dForm);

const main = document.querySelector('.column-center');
main.appendChild(dForm);