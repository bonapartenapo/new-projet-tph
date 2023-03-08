const ratio = .1

const option =
{
    root: null, // permet de detecter si l'elt est visible ou non
    rootMargin: '0px', //il s'agit del mage
    threshold: ratio // permet d'indiquer a partir de quel momen notre systeme d'intersection doit etre detecter. si thresold: 1.0 alor on tout les elt
}

const handeIntersect = function(entries, observer) 
{
    entries.forEach(function (entry)
    {
        if(entry.intersectionRatio > ratio) //intersectionRatio permet de montrer la quantiter d'elt visible a l'ecrant4
        {
            entry.target.classList.add('reveal-visible') //target permet d'obtenir l'element actuel
            console.log('visible')
        }
        
    });

}

const observer =  new IntersectionObserver(handeIntersect, option)
document.querySelectorAll('[class*="reveal-"], .reveal').forEach(function (r) {//on use cette fonction pour que reveal fonction sur plusieur classes
    observer.observe(r)
})

//fenetre modal
const modalContainer = document.querySelector(".modal-container")
const modalTrigger = document.querySelectorAll(".modal-trigger")

modalTrigger.forEach(trigger => trigger. // on use forEache parce que modal-trigger est user sur plusieur elements
    addEventListener('click', toggleModal))

function toggleModal()
{
    modalContainer.classList.toggle("active")// permet d'ajouter la classe activer chaquer fois qu'on clique sur btn
}


//carousel

document.body.onload = function()
{
    nbre = 5;
    p = 0;
    container = document.getElementById("container")
    gauche = document.getElementById("gauche")
    droit = document.getElementById("droit")

    container.style.width = (1000*nbre)+"px"

    //creation des 5 img
    for(i = 1; i < nbre; i++)
    {
        div = document.createElement('div')// creation de la balise div
        div.className = "photo"// attribution de la class photo a la div
        div.style.backgroundImage="url('../img/img"+i+".jpg')";
        container.appendChild(div)
    }
}

gauche.onclick = function()
{
    if(p > -nbre+1)
    p--;
    container.style.transform="translate("+p*1015+"px)"
    container.style.transition="all 1s ease"
    afficherMasquer()
}
droit.onclick = function()
{
    if(p < 0)
    p++;
    container.style.transform="translate("+p*1015+"px)"
    container.style.transition="all 1s ease"
    afficherMasquer()
}
