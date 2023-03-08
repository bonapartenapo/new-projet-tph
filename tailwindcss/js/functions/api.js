export async function fetchJSON (url, options = {}){// cette fonction permet de recuperer  un json
    const headers = {Accept: 'application/json', ...options.headers}//on modifi le header
    const r = await fetch(url, {...options, headers})
    if(r.ok)
    {
        return r.json()
    }
    throw new Error('erreur serveur', {cause: r})
} 