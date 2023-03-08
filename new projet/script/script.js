const ratio = 0.1 //10%

const option =
{
  threshold: ratio
}

const hande  = function(entries, observe)
{
  entries.forEach(function(entry)
  {
    if(entry.intersectionRatio > ratio)
    {
        entry.target.classList.add('reveal-visible')
        console.log('visible')
    }
    else
    {
      console.log('non visible')
    }
  });
}

const observer= new IntersectionObserver(hande, option)
document.querySelectorAll('.reveal').forEach(function(r){
  observer.observe(r)
})