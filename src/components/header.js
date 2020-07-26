export const header = () => {
  const headerDiv = document.querySelector('.header')
  const nav = document.createElement('nav')
  const h1 = document.createElement('h1')
  h1.textContent = 'Welcome to My Restaurant'
  const ul = document.createElement('ul')
  ul.setAttribute('class', 'nav nav-tabs')
  const home = document.createElement('li')
  home.textContent = 'Home'
  home.setAttribute('class', 'home')
  const about = document.createElement('li')
  about.textContent = 'About'
  about.setAttribute('class', 'about')
  const contact = document.createElement('li')
  contact.textContent = 'Contact'
  contact.setAttribute('class', 'contact')
  const menu4 = document.createElement('li')
  menu4.textContent = 'menu4'
  menu4.setAttribute('class', 'menu4')
  
  headerDiv.appendChild(h1)
  ul.appendChild(home)
  ul.appendChild(about)
  ul.appendChild(contact)
  ul.appendChild(menu4)
  headerDiv.appendChild(ul)
}
