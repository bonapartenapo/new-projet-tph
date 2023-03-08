
var btn = document.getElementById('but')
var texte = document.getElementById('demo')
var txt = document.getElementById('zone')
var ajout_txt = document.getElementById('ajout')

btn.addEventListener('click', addList)
const str = "please melio ou es tu"
function addList(e)
{
    //search renvoi la position exact de l'element rechercher
    //includes renvoi true si l'element rechercher a ete trouver
    //startsWith retrun true if string a string begins with a specified value
    let c = str.includes(txt.value)
    console.log(c)
    ajout_txt.innerText = c
    // ajout_txt.appendChild(zone.value)
    // texte.innerHTML = 'contenu changer'
    //toExponential(decimal number quantity) rounds off a number
    
  
}

const header = ['bonjour']
const tags = ['manger', 'dormir', 'chier']

let html = `<center><h1>${header}</h1></center>`



for(const x of tags)
{
    html += `<ol><strong>${x}<strong><ol>`
}
html +=`</ul>`

ajout_txt.innerHTML = html
let date = new Date()// permet de creer une date
//Math.floor(Math.random()*10) return a randrom integer form 0 to 9
document.getElementById('ajout2').innerHTML = date.getFullYear()
 e 
//if(age < 19) ?"old" : "young"; it is the ternary, if age < 19 then ol else young
