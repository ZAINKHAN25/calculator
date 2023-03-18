// declare area
var maincontroll = document.querySelector('#maincontroll');
var mainanswer = document.querySelector('#mainanswer').innerHTML;
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const equalsign = document.querySelector('#equalsign').innerHTML;
const multiply = document.querySelector('#multiply').innerHTML;
const divide = document.querySelector('#divide').innerHTML;
const plus = document.querySelector('#plus').innerHTML;
const minus = document.querySelector('#minus').innerHTML;
const dot = document.querySelector('#dot').innerHTML;

zero.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent + 0 }`;
});
one.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent + 1 }`;
});
two.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent + 2 }`;
});
three.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent + 3 }`;
});
four.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent + 4 }`;
});
five.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent + 5 }`;
});
six.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent + 6 }`;
});
seven.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent + 7 }`;
});
eight.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent + 8 }`;
});
nine.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent + 9 }`;
});