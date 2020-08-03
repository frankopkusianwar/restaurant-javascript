const header = () => {
  const headerDiv = document.querySelector('.header');
  const tabs = document.querySelector('.tabs');
  tabs.setAttribute('class', 'mt-5 text-white mb-5 bg-success');
  const h1 = document.createElement('h1');
  h1.textContent = 'Food Heaven';
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'nav nav-tabs');
  const home = document.createElement('li');
  home.textContent = 'Home';
  home.setAttribute('class', 'home');
  const menu4 = document.createElement('li');
  menu4.textContent = 'menu';
  menu4.setAttribute('class', 'Menu');
  const contact = document.createElement('li');
  contact.textContent = 'Contact';
  contact.setAttribute('class', 'contact');
  const about = document.createElement('li');
  about.textContent = 'About';
  about.setAttribute('class', 'about');

  headerDiv.appendChild(h1);
  ul.appendChild(home);
  ul.appendChild(menu4);
  ul.appendChild(contact);
  ul.appendChild(about);
  tabs.appendChild(ul);
};

export default header;
