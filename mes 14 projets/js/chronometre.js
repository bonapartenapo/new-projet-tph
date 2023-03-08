//on def les var dont on a beson
var sp,btn_start, btn_stop, t, ms, s, min, h;

//creation d'une fonction pour initialiser les var

    //getElementByTagName retoune une liste d'element portant le nom del a balise
    btn_start = document.getElementById('start')
    sp = document.getElementsByTagName("span")
    btn_stop = document.getElementById('stop')
    // btn_reset = document.getElementById('resett')

    ms = 0, s = 0, min = 0, h = 0



//metton en place le conpteur\
function update_chrono()
{
    ms++;
    if(ms == 10)
    {
        ms = 1
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
        h++
    }

    //insertion of values in sp\
    //[0] allow to select to first sp
    //[1]allow to select to second sp etc..
    
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = min + "min";
    sp[2].innerHTML = s + "s"
    sp[3].innerHTML = ms + "ms"
}

//mettons en place la fonciton du btn star
// btn_start.addEventListener('click', oki)
function start() 
{
    //allow to excecute update_chrone function  every 100ms
    t = setInterval(update_chrono,100)
    btn_start.diabled = true
}

function stop()
{
    clearInterval(t)//suprime l'interval t que j'ai creer
    btn_start.diabled = false
}

function reset()
{
    clearInterval(t)//suprime l'interval t que j'ai creer
    btn_start.diabled = false
    ms = 0, s = 0, min = 0, h = 0
    
    //inserons ses new valeurs dans les span
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = min + "min";
    sp[2].innerHTML = s + "s"
    sp[3].innerHTML = ms + "ms"
}