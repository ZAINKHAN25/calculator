// declare area
var maincontroll = document.querySelector('#maincontroll');
var mainanswer = document.querySelector('#mainanswer');
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
const equalsign = document.querySelector('#equalsign');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const dot = document.querySelector('#dot');

equalsign.addEventListener('click', () => {
    mainanswer.textContent = `${eval(maincontroll.textContent)}`
})

divide.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent +  divide.innerHTML}`;
});
multiply.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent +  multiply.innerHTML}`;
});
minus.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent +  minus.innerHTML}`;
});
plus.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent +  plus.innerHTML}`;
});
dot.addEventListener('click', () => {
    maincontroll.textContent = `${maincontroll.textContent +  dot.innerHTML}`;
});
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

function openfunction(){
    let cover = document.querySelector('#cover');
    cover.classList.add('open');
}
function closefunction(){
    let cover = document.querySelector('#cover');
    cover.classList.remove('open');
}