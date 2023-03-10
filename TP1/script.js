let composants = document.querySelector('.composants')
let btnAjout = document.querySelector('.btnAjout')

btnAjout.addEventListener("click", () => {

    let composant = creeElement('div', {
        'class': 'composant',
    })
    let icons = creeElement('div', {
        'class': 'icons'
    })
    let iconEdit = creeElement('i', {
        'class': 'fa-solid fa-pen-to-square',
    })
    let iconDelete = creeElement('i', {
        'class': 'fa-regular fa-trash-can',
    })
    icons.append(iconEdit)
    icons.append(iconDelete)
    composant.append(icons)

    let textArea = creeElement('textarea', {
        'id': 'text'
    })
    composant.append(textArea)
    composants.append(composant)

    deleteComposant(iconDelete, composant)
    iconEdit.addEventListener('click', () => {
        if (textArea.getAttribute('disabled') == 'true') {
            textArea.removeAttribute('disabled')
        } else {
            textArea.setAttribute('disabled', 'true')
        }
    })
})

function deleteComposant(trashIcon, composant) {
    trashIcon.addEventListener("click", () => composant.remove())
}

let creeElement = (nom, attributs = {}) => {
    const element = document.createElement(nom)
    for (const attribut in attributs) {
        element.setAttribute(attribut, attributs[attribut])
    }
    return element
    //   element.setAttribute(Object.keys(attributs)[0], Object.values(attributs)[0])
}
