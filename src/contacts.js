const loadPage = function() {
    let element = document.createElement("div");
    element.classList.add('contacts');
    let link = document.createElement('a');
    link.href = "https://github.com/LeGusto";
    link.text = "https://github.com/LeGusto";
    element.appendChild(link);
    return element;
}

export {loadPage};