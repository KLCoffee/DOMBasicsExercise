// DOM Basics Exercise

// 1
const portillos = document.getElementById(`portillos`);
console.dir(portillos);

// 2
const images = document.getElementsByTagName(`img`);
console.dir(images);

// 3
const centered = document.getElementsByClassName(`center`);
console.dir(centered);

// 4
const ginosEast = document.querySelector (`div`);
console.dir(ginosEast);

// 5
const pTags = document.querySelectorAll (`p`);
console.dir(pTags);

// 6 a
const h1 = document.querySelector (`h1`);
// 6 b
h1.innerText = `"Matt's Favorite Places To Eat In Sweet Home Chicago!"`
console.dir(h1);

// 7 a
const others = document.getElementById (`others`);
// 7 b
others.innerHTML = `<h3>"Other favorites"</h3>`;
console.dir(others.innerHTML);

// 8 a
const aTag = document.querySelector(`a`);
// 8 b
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// 9
h1.classList.add(`background`, `text-color`);
console.dir(h1);

// 10
h1.classList.remove(`background`);

// 11 a
const h4 = document.createElement(`h4`);
// 11 b
h4.innerText = `"CHICAGO: A great place to eat!"`;
// 11 c
const body = document.querySelector(`body`);
body.prepend(h4);
console.dir(h4);

// 12a
const h5 = document.createElement(`h5`);
// 12 b
h5.innerText = `"See you in the Windy City Sometime!"`;
// 12 c
aTag.insertAdjacentElement(`afterend`, h5);

// 13
const jB = document.querySelector(`li`);
jB.remove();

// 14 a
const divs =document.querySelectorAll(`div`);
console.dir(divs);









