
class Carousel {
    /**
     * 
     * @param {HTMLelement} element 
     * @param {object} options 
     * @param {object} option.slidesToScroll Nombres d'element a faire defiler 
     * @param {object} option.slidesVisibles Nombres d'element visible dans un slide 
     */
    constructor (element, options = {}) {
    this.element = element // sauvegarde du param elt dans elt
    this.options = Object.assign({}, { //creation de la proprieter.
        // on la fusionne en usan assign.assign. 
        //elle prend en param un object vide, cette objed va obtenir les diff properti fusionner
        slidesToScroll: 1, //nbre d'element a scroller
        slidesVisibles: 1  //nbre d'element visible
    },options)
    // this.children = [].slice.call(element.children)
    let root = this.createDivwithClass('carousel') 
    let container = this.createDivwithClass('carousel__container')
    root.appendChild(container)
    this.element.appendChild(root)//on rajoute l'element root dans this.element
    this.children.forEach(function(child) {
        container.appendChild(child)
    })
    }

    /**
     * 
     * @param {string} className 
     * @returns {HTMLElemtnt}
     */
    createDivwithClass(className)
    {
        let div = document.createElement('div')//creation d'une div
        div.setAttribute('class', 'className')// attribution de la classe carousel a root
        return div
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new Carousel(document.querySelector('#carousel1'), {
        slidesToScroll: 3, //nbre d'element a scroller

    
    })
})

