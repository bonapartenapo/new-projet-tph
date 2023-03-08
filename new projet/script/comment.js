// import { fetchJSON } from "./function/api.js"

// class InfinitePagination
// {
//   /** @type {HTMLelement} */
//   #endpoint;
//   /** @type {HTMLelement} */
//   #template;
//   /** @type {string} */
//   #target;
//   /** @type {string} */
//   #elements;
//   /** @type {string} */
//   #observer
//   /** @type {IntersectionObserver} */

//   /**
//    *
//    * @param {HTMLElement} element
//    */
//   constructor(element)
//   {
//       this.#endpoint = element.dataset.endpoint;
//       this.#template = document.querySelector(element.dataset.template)
//       this.#target = document.querySelector(element.dataset.target);
//       this.#elements = element.dataset.element;
//       this.#observer = new IntersectionObserver((entries) => 
//       {
//         for(const entry of entries)
//         {
//           if(entry.isIntersecting)// si l'entrer est visible alors
//           {
//             this.#loadMore()//fonction qui permet de charger plus de contenu
//           }
//         }
//       })
//     this.#observer.observe(element)

//   }

//     async #loadMore()
//     {
//         const comments = await fetchJSON(this.#endpoint)
//         for(const comment of comments)
//         {
//           const commentElement = this.#template.content.cloneNode(true)
//           this.#target.append(commentElement)
//         }
//     }
// }

// document.querySelectorAll('.js-infinite-pagination').forEach(el => new InfinitePagination(el));


const btnOpen = document.querySelector(".modal")
const btnClose = document.querySelectorAll(".modal-trigger")

btnClose.forEach(trigger => trigger.
  addEventListener('click', Modal))

function Modal()
{
  btnOpen.classList.toggle("active")
}
