import {loadPage as home_load} from "./home";
import {loadPage as menu_load} from "./menu";
import {loadPage as contacts_load} from "./contacts";
import './style.css';
import bg from './Wave.svg';


let container = document.createElement('div');
container.classList.add("container");
document.body.appendChild(container);

const make = (obj) => document.createElement(obj);
const select = (obj) => document.querySelector(obj);

function reset() {
    let middle = select('.middle');
    Array.from(middle.children).forEach((el) => {middle.removeChild(el)});

}

function add(ele, goal) {
    if (!Array.isArray(ele)) {goal.appendChild(ele); return}

    ele.forEach(element => {
        goal.appendChild(element);
    });
}

function container_setup() {
    let top = make('div');
    top.classList.add("top");
    let middle = make('div');
    middle.classList.add("middle");
    let bottom = make('div');
    bottom.classList.add("bottom");

    add([top, middle, bottom], container);
}

function generate_top() {
    let h1 = document.createElement('h1');
    h1.textContent = "Mexican toilet";

    let top = select(".top");

    let button_holder = make('div');
    button_holder.classList.add('top_buttons');
    let b1 = make('button');
    b1.textContent = 'Home';
    let b2 = make('button');
    b2.textContent = 'Menu';
    let b3 = make('button');
    b3.textContent = 'Contacts';
    let buts = [b1, b2, b3];
    add(h1, top);
    add(buts, button_holder);
    add(button_holder, top);

    b1.addEventListener('click', () => {reset(); select('.middle').appendChild(home_load());})
    b2.addEventListener('click', () => {reset(); select('.middle').appendChild(menu_load());})
    b3.addEventListener('click', () => {reset(); select('.middle').appendChild(contacts_load());})

}

container_setup();
generate_top();

select('.middle').appendChild(home_load());

console.log("worked");