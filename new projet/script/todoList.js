const btn = document.querySelector('.addTask > button')
const input = document.querySelector('input')
//const notCompleted = document.querySelector('input')
//localStorage.setItem(cle, valeur) enregistre une valeur dans le storage. la cle est en string
//localStorage.getItem(cle) recuperer la  valeur de la cle


btn.addEventListener('click', addList)

function addList(e)
{

    localStorage.setItem("task", input.value) //j'affecte a task la valeur de input. localStorage.setItem permet d'acceder a un elt
    // document.location.reload()
    const notCompleted = document.querySelector('.notCompleted')
    const completed = document.querySelector('.completed')

    const newLi= document.createElement('li')
    const checkBtn= document.createElement('button')
    const delBtn= document.createElement('button')


    checkBtn.innerHTML = '<img src="../img/correct-icon.png" class="correct">'
    delBtn.innerHTML = '<img src="../img/poubelle-2.png" alt="poubelle" class="poubelle">'

    let localItems = JSON.parse(localStorage.getItem('localItem'))
    
    if(localStorage.getItem("task")  != null)
    {
        newLi.textContent =localStorage.getItem("task") 
        input.value =''
        notCompleted.appendChild(newLi)
        newLi.appendChild(checkBtn)
        newLi.appendChild(delBtn)
    }

    checkBtn.addEventListener('click', function(){
        notCompleted.removeChild(newLi)
        completed.appendChild(newLi)
        checkBtn.style.display= 'none'
    })

    delBtn.addEventListener('click', function(){
        notCompleted.removeChild(newLi)
    })

    delBtn.addEventListener('click', function(){
        completed.removeChild(newLi)
    })
}