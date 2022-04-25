// JavaScript Document

var teksten = [
    "prinses 1",
    "prinses 2",
    "prinses 3",
    "prinses 4",
    "prinses 5",
    "prinses 6",
    "prinses 7"
];

var afbeeldingen = [
    "images/peach1.png",
    "images/peach2.png",
    "images/peach3.png",
    "images/peach4.png",
    "images/peach5.png",
    "images/peach6.png",
    "images/peach7.png"
];

teller = 0;

tijd = 4000;


var deButton = document.querySelector("button");

var deTekst = document.querySelector(".beginscherm");
var dePrinses = document.querySelector(".peach1-2");

var deDeurlinks = document.querySelector("div.deur.links");
var deDeurrechts= document.querySelector("div.deur.rechts");

deButton.addEventListener("click", volgendePrinsesEnTekst);


function volgendePrinsesEnTekst () {
    dePrinses.src = afbeeldingen[teller];

    deTekst.textContent = teksten[teller];

    teller = teller + 1;

    if (teller == afbeeldingen.length) {
        teller = 0;
    }

    deDeurlinks.classList.add("open");
    deDeurrechts.classList.add("open");


    setTimeout(function() {
        deDeurlinks.classList.remove("open");
        deDeurrechts.classList.remove("open");
    }, tijd);
}
