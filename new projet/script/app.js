
let modal = null
const focusableSelector = "button, a, input, textarea"
let focusables = []

const openModal = function (e) 
{
    e.preventDefault() //on ne veu pas que le clic sur le le fonctionne convenabement
    modal = document.querySelector(e.target.getAttribute('href'));// on reccupere la modal a ouvrir
    // focusables = array.from(modal.querySelectorAll(focusableSelector))
    modal.style.display = null // permet d'afficher la classe modal
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-modal', 'true')
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}

const closeModal = function(e) {
    if(modal === null) return
    e.preventDefault() //on ne veu pas que le clic sur le le fonctionne convenabement    target.style.display = null // permet d'afficher la classe modal
    window.setTimeout(function ()
    {
        modal.style.display = "none" // permet d'afficher la classe modal
        modal = null
    }, 500)
    modal.setAttribute('aria-hidden', true)// on ajoute l'attribut aria-hidden en attribuan la valeur true
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
  
}

const stopPropagation = function(e) {
    e.stopPropagation()
}

const focusInmodal = function (e) 
{
    e.preventDefault()

}

document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal) // on ajoute une evenement a chaque lien
})

window.addEventListener('keydown', function(e)
{
  if(e.key === "Escape" || e.key === "Esc")
  {
    closeModal(e)
  }

  if(e.key == 'tab' && modal !== null)
  {
    focusInmodal(e)
  }
})
