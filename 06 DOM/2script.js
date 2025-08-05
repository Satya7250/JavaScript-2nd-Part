const div = document.createElement('div');
console.log(div);
div.className = 'main'
div.id = Math.round(Math.random()*10+1);
div.setAttribute('title', 'generated title')
div.style.backgroundColor = 'green'
div.style.padding = '12px'
// div.innerText = 'Hello World'
const addText = document.createTextNode("Hello World")
div.appendChild(addText)

document.body.appendChild(div)