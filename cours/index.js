// *********        SELECTEURS          *************

/* Le DOM est une architecture en arborescence (voir fichier support) dont le sommet est 'document'.

 Pour pointer  un élément sur le DOM via la console, il suffit de taper 'document.querySelector("votreSelection").
 pour info: querySelector est une 'method' c'est à dire un outil qui a été codé et qui fait partie intégrante de JS.

 Dans le fichier index.js, la même chose est possible:
 Si on veut changer le style d'un élément, on pointe l'élément puis on précise son style avec les même fonctions que dans CSS. ATTENTION:Les tiret ne sont pas reconnu, il faudra utiliser le camelCase (ex: borderRadius).
 exemple:     */
// document.querySelector("h4").style.background = "yellow";

/* Taper systématiquement 'document.querySelector("....")' pour appeler un élément est trés long. Pour économiser ce temps, on peut placer cette commande dans une variable 'const' que l'on pourra appeler lorsqu'on en aura besoin:  */

// const balise = document.querySelector("h4");

// On peut maintenant changer le style en utilisant la variable 'balise':

// balise.style.background = "red";

// *********        CLICK EVENT         *************

const questionContainer = document.querySelector(".click-event");

// Lorsque l'on crée une variable qui pointe vers un élément du DOM, il faut la tester afin d'éviter de perdre bcp de temps par la suite.
console.log(questionContainer);

//  **    Création d'un évènement      **

/*      - on pointe l'élément concerné grace à la variable définie précédemment
        - on appelle la 'method' (déf de 'method' ligne 6) de l'évènement 'addEventListener("..." , laFonction)
                cette 'method' comprend 2 paramètres:
                            -l'évènement, il en existe plein... 
                            -la fonction, qui souvent a été codé auparavant
                            */

//   Afin de tester que le 'addEventListener' fonctionne, on affiche la chaine de caractères: "ça fonctionne" dans la console. pour cela, on utilisera l'évènement "click" et la fonction sera: console.log("...");

questionContainer.addEventListener("click", () => {
    console.log("ça fonctionne!");
});

//quand on a beaucoup de style à mettre lors de l'évènement,
//      - on crée une classe avec le style dans le fichier css,
//      - on injecte la classe à l'élément que l'on veut: classList.add

questionContainer.addEventListener("click", () => {
    questionContainer.classList.add("question-clicked");
});
