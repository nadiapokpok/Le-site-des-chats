//FX NAVBAR

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        document.getElementById("menu").style.top = "23px";
    } else {
        document.getElementById("menu").style.top = "-55px";
    }
} 

//Fenetre Modale

var part1 = document.getElementById('partie1');



function show(choice){
    var choix = document.getElementById(choice);
    if (choix.style.display == 'none'){
        choix.style.display = 'block'
    }else{
        choix.style.display = 'none';
    }
}

function over(choiceOne){
    console.log(choiceOne);
    var monElt = document.getElementById(choiceOne);
    console.log(monElt);
    console.log(monElt.style)
    monElt.style.backgroundColor = 'red';
}

function disparait(choiceTwo){
    console.log(choiceTwo);
    var monElt = document.getElementById(choiceTwo);
    console.log(monElt);
    console.log(monElt.style)
    monElt.style.backgroundColor = '';
}