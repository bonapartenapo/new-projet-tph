btn = document.querySelectorAll(".modal-trigger")
container= document.querySelector(".container-modal")
btn.forEach(mod => mod.
    addEventListener('click', Modal))

function Modal()
{
    container.classList.toggle("active")
}

//intersection observer

const ratio = .1

const option =
{
    root: null,
    threshold: ratio
}

const intersect = function(entries, observer)
{
    entries.forEach(function(entry)
    {
        if(intersectionRatio > ratio)
        {
            entry.target.classList.add('reveal-visible')
        }
    })
}

const observer = new IntersectionObserver(intersect, option)
document.querySelectorAll('.reveal').forEach(function(r)
{
    observer.observe(r)
})