function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').
    appendChild(li)
}
addLanguage("python")
addLanguage("typeScript")

function addOptiLanguage(langName){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(langName))
    document.querySelector(`.language`).appendChild(li)
}
addOptiLanguage("CPP")

//Edit
const secondLang = document.querySelector('li:nth-child(2)')
const newli = document.createElement('li')
newli.textContent = 'Mojo'
secondLang.replaceWith(newli)

//Edit
const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = '<li>TypeScript</li>'


//remove
const lastlang = document.querySelector('li:last-child')
lastlang.remove()