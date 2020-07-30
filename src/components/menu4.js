const menu4Page = () => {
  document.querySelector('.main').innerHTML = '';
  const main = document.querySelector('.main');
  const menuDiv = document.createElement('div');

  const cardDiv1 = document.createElement('div')
  cardDiv1.setAttribute('class', 'card')
  cardDiv1.setAttribute('style', 'width: 18rem;')

  const cardImg1 = document.createElement('img')
  cardImg1.setAttribute('class', 'card-img-top')
  cardImg1.setAttribute('src', '../../dist/b562fcb00327d454a44307cee8f478d8.jpg')

  const cardBody1 = document.createElement('div')
  cardBody1.setAttribute("class", "card-body text-dark")
  
  const bodyHeader1 = document.createElement('h5')
  bodyHeader1.setAttribute('class', 'card-title')
  bodyHeader1.textContent = 'menu1'

  const bodyText1 = document.createElement('p')
  bodyText1.setAttribute('class', 'card-text')
  bodyText1.textContent = '$20'

  cardDiv1.appendChild(cardImg1)
  cardDiv1.appendChild(cardBody1)
  cardBody1.appendChild(bodyHeader1)
  cardBody1.appendChild(bodyText1)

  menuDiv.appendChild(cardDiv1)
  console.log(main.appendChild(menuDiv))

  // const cardDiv2 = document.createElement('div')
  // const cardImg2 = document.createElement('img')
  // const cardBody2 = document.createElement('div')
  // const bodyHeader2 = document.createElement('h5')
  // const bodyText2 = document.createElement('p')

  // const cardDiv3 = document.createElement('div')
  // const cardImg3 = document.createElement('img')
  // const cardBody3 = document.createElement('div')
  // const bodyHeader3 = document.createElement('h5')
  // const bodyText3 = document.createElement('p')
};

export default menu4Page;
