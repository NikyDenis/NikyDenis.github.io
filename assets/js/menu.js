function includeHTML() {
    let element, i, menu, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    // Cherche dans le doc html tous les éléments
    element = document.getElementsByTagName("*");
    for (i = 0; i < element.length; i++) {
        menu = element[i];
        /*search for elements with a certain atrribute:*/
        // cherche les elmnt dont l'attribu est menu
        file = menu.getAttribute("menu");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        menu.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        menu.innerHTML = "Page not found.";
                    }
                    /*remove the attribute, and call this function once more:*/
                    menu.removeAttribute("menu");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};
includeHTML();