const input = document.querySelector('.input');

const one = document.querySelector('#one');
const two= document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six= document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const del = document.querySelector('#delete');

const equal = document.querySelector('#equal')

const zbrajanje = document.querySelector('#zbroj');
const oduzimanje = document.querySelector('#oduzimanje');
const multiply = document.querySelector('#multiply');

let result = 0;
const calculator = function (){
    
    one.addEventListener('click', function() {
        input.innerHTML +='1';
     })
     two.addEventListener('click', function() {
         input.innerHTML +='2';
     })
     three.addEventListener('click', function() {
         input.innerHTML +='3';
     })
     four.addEventListener('click', function() {
         input.innerHTML +='4';
     })
     
     five.addEventListener('click', function() {
         input.innerHTML +='5';
     })
     six.addEventListener('click', function() {
         input.innerHTML +='6';
     })
     seven.addEventListener('click', function() {
         input.innerHTML +='7';
     })
     eight.addEventListener('click', function() {
         input.innerHTML +='8';
     })
     nine.addEventListener('click', function() {
         input.innerHTML +='9';
     })
     zero.addEventListener('click', function() {
         input.innerHTML +='0';
     })
     del.addEventListener('click',function() {
         input.innerHTML = '';
     })   
     zbrajanje.addEventListener('click',function () {
        input.innerHTML +='+';
     })
     oduzimanje.addEventListener('click',function () {
        input.innerHTML +='-';
     })
     division.addEventListener('click',function() {
        input.innerHTML +='/';
     })
     multiply.addEventListener('click',function() {
        input.innerHTML +='*';
     })
     equal.addEventListener('click',function () {
        const rjesenje = input.innerText;
        const pravo_rjesenje = eval(rjesenje);
        input.innerHTML = pravo_rjesenje;
     })
}
calculator();