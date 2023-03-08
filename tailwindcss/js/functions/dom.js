/**
 * 
 * @param {string} tagName 
 * @param {object} attriubtes 
 * @return {HTMLElement}
 */

export function createElement(tagName, attriubtes = {}){
    const element = document.createElement(tagName)
    for(const [attribute, value] of Object.entries(attribute))
    {
        element.setAttribute(attribute, value)

    }
    return element
}