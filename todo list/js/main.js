var addToDoButton = document.getElementById('addToDo')
var toDoContainer = document.getElementById('toDoContainer')
var inputField = document.getElementById('inputField')


addToDoButton.onclick = function()
{
    //on verifi si l'input n'est pas vide
    if(inputField.value !="")
    {        // si l'input n'est pas vide, on cree un paragraph
        var paragraph = document.createElement('p')
    }
    // valorisons ce paragraph avec le contenu de l'input
    paragraph.innerText = inputField.value

    //styliser le paragraph
    paragraph.classList.add('paragraph_style')
    
    //inserons le paragraph dans l'elemtn toDoContainer 
    toDoContainer.appendChild(paragraph)

    //vidons l'input quand le paragraph est ajouter
    inputField.value ="";

    //barrer le paragraph quand on clique dessus
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraph_click')
    })

    //supprimer la tache quand on double click sur la tache
    paragraph.addEventListener('dblclick', function() //dblclick est user pour les doubles clicks
    {
        toDoContainer.removeChild(paragraph) //removeChild permet de supprimer la tache
    })
}