// Movement animation to happen
const container = document.querySelector('.container');
const card = document.querySelector('.card');

// Items
const adidas = document.querySelector('.adidas img');
const title = document.querySelector('.desc h1');
const p = document.querySelector('.desc p');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase');


// Moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// Animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all .6s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Popout
    title.style.transform = "translateZ(0px)";
    p.style.transform = "translateZ(0px)";
    adidas.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
})

// Animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(100px)";
    p.style.transform = "translateZ(90px)";
    adidas.style.transform = "translateZ(110px) rotateZ(-30deg)";
    sizes.style.transform = "translateZ(80px)";
    purchase.style.transform = "translateZ(70px)";
})