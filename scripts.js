const form = document.querySelector('form');
const ol = document.querySelector('ol');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

data.forEach(function(item){
    liMaker(item);
});

function liMaker(text){
    const li = document.createElement('li');
    li.textContent = text;
    ol.appendChild(li);
  }

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    
    liMaker(input.value);
    input.value = "";
});

button.addEventListener('click', function () {
    localStorage.clear();
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild);
    }
});

