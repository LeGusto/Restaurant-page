import {loadPage, LoadPage} from "./home";
import './style.css';

let container = document.createElement('div');
container.classList.add("container");
document.body.appendChild(container);

function add(ele) {
    ele.forEach(element => {
        container.appendChild(element);
    });
}

function container_setup() {
    let top = document.createElement('div');
    top.classList.add("top");
    let middle = document.createElement('div');
    middle.classList.add("middle");
    let bottom = document.createElement('div');
    bottom.classList.add("bottom");
    middle.style.backgroundColor = 'red';

    add([top, middle, bottom]);
}

container_setup();

/*container.append(loadPage());*/

console.log("worked");