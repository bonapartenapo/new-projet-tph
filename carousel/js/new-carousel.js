
//au chargement de la page on initialise les diff var
document.body.onload = function() {
    nbr = 5;
    p = 0
    container = document.getElementById("container")
    gauche = document.getElementById("gauche")
    droit = document.getElementById("droit")
    container.style.width =(800*nbr)+"px" // modification de la largeur du container en la mulitplian par le nbre d'image

    // creons les 5 img
    for(i = 1; i < nbr; i++)
    {
        div = document.createElement("div")
        div.className = "photo";
        div.style.backgroundImage="url('../img/img"+i+".jpg')";
        //on ajoute la div au container principale
        container.appendChild(div)
    }
    afficherMasquer()

}

//ajoutons les evenements aux btn

gauche.onclick = function(){
    if(p > -nbr+1)
    p--;
    container.style.transform="translate("+p*800+"px)"
    container.style.transition="all 1s ease"
    afficherMasquer()
}
droit.onclick = function(){
    if(p < 0)
    p++;
    container.style.transform="translate("+p*800+"px)"
    container.style.transition="all 1s ease"
    afficherMasquer()
}

function afficherMasquer()
{
    if(p == -nbr+1)
        gauche.style.visibility="hidden"
    else
        gauche.style.visibility= "visible"

    if(p == 0)
        droit.style.visibility="hidden"
    else
        droit.style.visibility= "visible"
}