// recuperation de quelque elements du DOM
let ul = document.getElementById('list-group')
const buttonAjouter = document.getElementById('btnAjouter')
const inputTask = document.getElementById('InputTask')
const form = document.querySelector('form')
chargerTache()
function ajouterTache(){
     let tache = inputTask.value.trim()
     if(tache===''){
        alert('vous devrez entrer une tache')
     }else{
       createElement(tache)
       enregistrerDonnes()
     }
     
}

// ecoutons le click sur la button ajouter
buttonAjouter.addEventListener('click', (e)=>{
    e.preventDefault()
    ajouterTache()
    form.reset()
})

// foniction pour cree la balise li
function createElement(tache){
    // creation des elements de la liste
    let li = document.createElement('li')
    li.classList.add('list-group-item', 'mb-2')
    li.innerHTML = tache
    // imprimons la balise li sur la balise ul
    ul.appendChild(li)

    // button supprimer
    let buttonsupp = document.createElement('button')
    li.appendChild(buttonsupp)
    buttonsupp.textContent = 'supprimer'
    buttonsupp.classList.add('rounded-1', 'border-0','bg-danger','text-white','p-1')
    li.classList.add('d-flex', 'justify-content-between', 'align-items-center')

    // suppression d'element
    buttonsupp.addEventListener('click', ()=>{
        ul.removeChild(li)
        enregistrerDonnes()
        
    })
}

// fonction pour enregistrer les donnes sur le local storage
function enregistrerDonnes(){
    let taches = [];
    ul.querySelectorAll('li').forEach (function(item){
        taches.push(item.childNodes[0].textContent.trim())
        console.log(taches)
    })

    localStorage.setItem('tache',JSON.stringify(taches))
}

// fonction de chargement de local storage

function chargerTache(){
    const taches = JSON.parse(localStorage.getItem('tache')) || []

    taches.forEach(tache => createElement(tache))
}



