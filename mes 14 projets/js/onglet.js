// var btn = document.querySelectorAll('.button')

// btn.forEach(onglet => onglet.
//     addEventListener('click', openOnglet))

function openOnglet(evt, name)
{
    var i,tabcontent,tablinks
    /* getelementsByClassName allows you to retrieve(recupere) all the elts carried by a class*/
    tabcontent = document.getElementsByClassName('tabcontent')
    console.log(tabcontent.len)
    for(i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = 'none'
    }

    tablinks = document.getElementsByClassName('btn')
    for(i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace("active", "")
    }

    document.getElementById(name).style.display = "block"
    evt.currentTarget.className += "active"
}
