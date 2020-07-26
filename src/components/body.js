import home from './home'
import about from './about'
import contact from './contact'
import menu4 from './menu4'


const body = () => {
  
  const tabs = document.querySelectorAll('li')
  tabs.forEach(tab => tab.addEventListener('click', (tab) => {
    if (tab.textContent === 'Home'){
      console.log('home content')
    }
    else if(tab.textContent === 'About'){
      console.log('about content')
    }
    else if(tab.textContent === 'Contact'){
      console.log('contact content')
    }
    else{
      console.log('menu4')
    }
  }))
  
}

export { body }
