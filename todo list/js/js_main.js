var addToDoButton = document.getElementById('addToDo')
var toDoContainer = document.getElementById('toDoContainer')
var inputField = document.getElementById('inputField')

addToDoButton.onclick = function()
{
    // l'input n'est pas vide alors on creer un paragraph
    if(inputField.value !="")
    {
        var paragraph = document.createElement('p')
        var img = document.createElement('img')
    }

    //inserons le contenu dans paragraph
    paragraph.innerText = inputField.value

    //styliser le paragraph
    paragraph.classList.add('paragraph_style')
    img.classList.add('img_poubelle')

    //inserons le paragraph dans toDoContainer
    toDoContainer.appendChild(paragraph)
    
    
    inputField.value = ""// vide l'input quand le paragraph est ajouter

    //barron le paragraph
    paragraph.addEventListener('click', function()
    {
        paragraph.classList.add('paragraph_click')
    })

    paragraph.addEventListener('dblclick', function()
    {
        toDoContainer.removeChild(paragraph)
    })
}