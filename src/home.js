const loadPage = function() {
    let element = document.createElement("div");
    element.classList.add('home');
    element.textContent = "Welcome!";

    return element;
}

export {loadPage};