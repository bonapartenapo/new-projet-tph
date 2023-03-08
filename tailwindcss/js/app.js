 const li = document.querySelector('ul li:first-child')
// querySelector permet de selectionner une element 
// querySelectorAll permet de selectionner une liste d'element

//lis.forEach(v => console.log(v))//permeet d'afficher tout les li

/*console.log(
    ul.nodeName,// pernmet de donner le nom de la balise HTML sur laquelle vous etes
    ul.innerHTML,//permet de modifier le contenu de votre balise
    //innerText recupere le contenu d'une balise sans inclure les balises qui sont a l'interieur
    //textContent renvoi le contenu d'une balise sans inclure les balises et en respectant les espace
)*/

// ul.setAttribute('hidden', 'hidden')
// ul.removeAttribute('hidden')
// console.log(
//     ul.classList.remove('red')
// )

// setInterval(() => { //cette fonciton permet de faire clignoter le texte
//     ul.classList.toggle('red') 
// }, 1000);

    // li.style.color = 'green' //met le texte en couler verte
    // li.style.fontWeight = 'bold'


// const newLi = document.createElement('li')
// newLi.innerHTML = 'bonjour les gen'
// document.querySelector('ul').appendChild(newLi)// appendChild permet d'ajoute un noeud passer en param; append permet d'ajouter un elt passer en param et prepend perment de ... essai toi mm 

const wrapper = document.querySelector('#lastPost')
const loader = document.createElement('p')

loader.innerText = 'chargement...'
wrapper.append(loader)