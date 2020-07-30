const aboutPage = () => {
  document.querySelector('.main').innerHTML = '';
  const main = document.querySelector('.main');
  const p = document.createElement('p');
  p.textContent = 'about';
  main.appendChild(p);
};

export default aboutPage;
