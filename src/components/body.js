import home from './home'
import about from './about'
import contact from './contact'
import menu4 from './menu4'


const body = () => {
  
  const tabs = document.querySelectorAll('li')
  const main = document.querySelector('.main')
  main.innerHTML = '<p>home</p>'
  tabs.forEach(tab => tab.addEventListener('click', () => {
    if (tab.textContent === 'Home'){
      home()
    }
    else if(tab.textContent === 'About') {
      about()
    }
    else if(tab.textContent === 'Contact') {
      contact()
    }
    else {
      menu4()
    }
  }))

}

export { body }
