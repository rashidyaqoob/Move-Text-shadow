const hero = document.querySelector(".hero");
console.log(hero);
const text = document.querySelector("h1");
console.log(text);
const walk = 100;

hero.addEventListener("mousemove", shadow);
function shadow(e) {

    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;

    const xWalk = (x / width * walk) - (walk / 2);
    const yWalk = (y / height * walk) - (walk / 2);
    text.style.textShadow = `${xWalk}px ${yWalk}px green`;
}


