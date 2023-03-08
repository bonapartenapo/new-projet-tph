btn_start = document.querySelector('button')
var sp = document.getElementsByTagName('span')

btn_start.addEventListener('click', start)

//creons une fonction qui va gere les diff l'heur,min,s,ms
var heur,min,s,ms,t
heur = 0, min = 0, s = 0, ms = 0
function chrono()
{
    ms++
    if(ms == 10)
    {
        ms = 0
        s++
    }
    if(s == 60)
    {
        s = 0
        min++
    }

    if(min == 60)
    {
        min = 0
        heur++
    }

    // ajouton ses diff valeur au span
    sp[0].innerHTML = heur + "h"
    sp[1].innerHTML = min + "min"
    sp[2].innerHTML = s + "s"
    sp[3].innerHTML = ms + "ms"
}

//fonction pour demarrer le chrono
function start(e)
{
    t = setInterval(chrono, 100);
    btn_start.disabled = true
}

//fonction pour stopper le chrono
function stop(e)
{
    clearInterval(t)
    btn_start.disabled = false//permet de fair continuer le chono lorqu'on clic sur start
}

function reset(e)
{
    clearInterval(t)
    btn_start.disabled = false//permet de fair continuer le chono lorqu'on clic sur start
    heur = 0, min = 0, s = 0, ms = 0  
    //inseron cela dans le span
    sp[0].innerHTML = heur + "h"
    sp[1].innerHTML = min + "min"
    sp[2].innerHTML = s + "s"
    sp[3].innerHTML = ms + "ms"
}