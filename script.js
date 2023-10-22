const cards = [
    {
        imgNumber: "0",
        name: "peter jonas",
        job: "intern",
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Est corporis fugit sint blanditiis 
        quae distinctio, officia, obcaecati laboriosam hic 
        explicabo incidunt excepturi libero! Cum ducimus 
        dolor aspernatur modi illum ipsa!`
    },
    {
        imgNumber: "1",
        name: "susan smith",
        job: "web developer",
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Est corporis fugit sint blanditiis 
        quae distinctio, officia, obcaecati laboriosam hic 
        explicabo incidunt excepturi`
    },
    {
        imgNumber: "2",
        name: "anna johnson",
        job: "web designer",
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Est corporis fugit sint blanditiis 
        quae distinctio, officia, obcaecati laboriosam hic 
        explicabo incidunt excepturi libero! Cum ducimus 
        dolor aspernatur modi illum ipsa! excepturi libero! 
        Cum ducimus dolor aspernatur modi illum ipsa!`
    },
    {
        imgNumber: "3",
        name: "bill anderson",
        job: "the boss",
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. officia, obcaecati laboriosam hic 
        explicabo incidunt excepturi libero! Cum ducimus 
        dolor aspernatur modi illum ipsa!`
    },
    {
        imgNumber: "4",
        name: "jolze swane",
        job: "frontend developer",
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Est corporis fugit sint blanditiis 
        quae distinctio, officia,ipsum dolor sit amet consectetur 
        adipisicing elit. Est corporis fugit sint blanditiis 
        quae distinctio, obcaecati laboriosam hic 
        explicabo incidunt excepturi libero! Cum ducimus 
        dolor aspernatur modi illum ipsa!`
    },
];

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.info').innerHTML = `
        <img src="images/avatar-0${cards[0].imgNumber}.png" alt="profile">
        <h3 class="name">${cards[0].name}</h3>
        <p class="job">${cards[0].job}</p>
        <p class="description">${cards[0].description}</p>
    `;
})

let html = '';

const supriseBtnElement = document.querySelector('.btn');
supriseBtnElement.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * cards.length);
    console.log(randomNumber);

    html = `
        <img src="images/avatar-0${cards[randomNumber].imgNumber}.png" alt="profile">
        <h3 class="name">${cards[randomNumber].name}</h3>
        <p class="job">${cards[randomNumber].job}</p>
        <p class="description">${cards[randomNumber].description}</p>
    `
    document.querySelector('.info').innerHTML = html;
});

let counter = 0;
const sleftIconElement = document.querySelector('.left');
sleftIconElement.addEventListener('click', () => {
    counter--;
    if(counter < 0) counter = cards.length - 1;
    if(counter > cards.length - 1) counter = 0;
    html = `
        <img src="images/avatar-0${cards[counter].imgNumber}.png" alt="profile">
        <h3 class="name">${cards[counter].name}</h3>
        <p class="job">${cards[counter].job}</p>
        <p class="description">${cards[counter].description}</p>
    `
    document.querySelector('.info').innerHTML = html;
});

const rightIconElement = document.querySelector('.right');
rightIconElement.addEventListener('click', () => {
    counter++;
    if(counter < 0) counter = cards.length - 1;
    if(counter > cards.length - 1) counter = 0;
    html = `
        <img src="images/avatar-0${cards[counter].imgNumber}.png" alt="profile">
        <h3 class="name">${cards[counter].name}</h3>
        <p class="job">${cards[counter].job}</p>
        <p class="description">${cards[counter].description}</p>
    `
    document.querySelector('.info').innerHTML = html;
});

