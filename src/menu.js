import burrito from './burrito.jpg';
import taco from './taco.jpg';
import nachos from './nachos.jpg';
import tamale from './tamale.jpg';
import chili from './chili.jpg';

let images = [burrito, taco, nachos, tamale, chili];
let descs = [
    "This is the burrito of all time!",
    "This special casing taco is sure to leave you satisfied!",
    "In for a treat? Try these nachos!",
    "Looking for something quick? Order our signature tamale!",
    "Try this chili if you are feeling brave and in for an experience!"]

const makeCard = function(source, text) {
    let card = document.createElement('div');
    card.classList.add('card');

    let img = new Image();
    img.src = source;
    img.classList.add('food');
    let desc = document.createElement('div');
    desc.textContent = text;
    desc.classList.add('desc');
    card.appendChild(img);
    card.appendChild(desc);

    return card;
}

const loadPage = function() {
    let element = document.createElement("div");
    element.classList.add('menu');

    for (let i = 0; i<5; i++) {
        let card1 = makeCard(images[i], descs[i]);
        element.appendChild(card1);
    }

    return element;
}

export {loadPage};