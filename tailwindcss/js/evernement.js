//preventDefault() permet d'empecher comportment par defaut d'un elt

/*document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault()
    const form = e.currentTarget//recuperation des donner de l'input
    const data = new FormData(form) //
    const fisrtname = (data.get('fisrtname'))// on recupere et on aggiche le champs first name
    if(fisrtname.length < 2)
    {
        e.preventDefault
    }
    console.log(fisrtname)
})*/

//ceci permet de savoir si on a user un racourci clavicer
/*
document.addEventListener('keydown', (e) =>{
    if(e.ctrlKey === true && e.key ==='k')
    {
        e.preventDefault()
        console.log('racourci')
    }

        
})*/

document.querySelector('input').addEventListener('change', (e) =>{

       const p = e.currentTarget.checked

        const ap = console.log('vous avez cliquer sur la checkobox')
        
})

document.querySelector('select').addEventListener('change', (e) =>{
    const p = (e.currentTarget.value)

    const essaie = p =>
    {
        return p === 'option 2'
    }
    
    const a = console.log('vous avez choisir',p)

})
const observer = new IntersectionObserver((entries) => {
    console.log(entries)
})

observer.observe(document.querySelector('button'))