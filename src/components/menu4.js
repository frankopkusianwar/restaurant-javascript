const menu4Page = () => {
  document.querySelector('.main').innerHTML = '';
  const main = document.querySelector('.main');
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'd-flex justify-content-between');

  const cardDiv1 = document.createElement('div');
  cardDiv1.setAttribute('class', 'card');
  cardDiv1.setAttribute('style', 'width: 18rem;');

  const cardImg1 = document.createElement('img');
  cardImg1.setAttribute('class', 'card-img-top');
  cardImg1.setAttribute('src', '../../dist/b562fcb00327d454a44307cee8f478d8.jpg');

  const cardBody1 = document.createElement('div');
  cardBody1.setAttribute('class', 'card-body text-dark');

  const bodyHeader1 = document.createElement('h5');
  bodyHeader1.setAttribute('class', 'card-title');
  bodyHeader1.textContent = 'menu1';

  const bodyText1 = document.createElement('p');
  bodyText1.setAttribute('class', 'card-text');
  bodyText1.textContent = '$20';

  cardDiv1.appendChild(cardImg1);
  cardDiv1.appendChild(cardBody1);
  cardBody1.appendChild(bodyHeader1);
  cardBody1.appendChild(bodyText1);

  menuDiv.appendChild(cardDiv1);
  main.appendChild(menuDiv);

  // card2

  const cardDiv2 = document.createElement('div');
  cardDiv2.setAttribute('class', 'card');
  cardDiv2.setAttribute('style', 'width: 18rem;');

  const cardImg2 = document.createElement('img');
  cardImg2.setAttribute('class', 'card-img-top');
  cardImg2.setAttribute('src', '../../dist/b9255afe497dc39272a1c9e181704423.jpg');

  const cardBody2 = document.createElement('div');
  cardBody2.setAttribute('class', 'card-body text-dark');

  const bodyHeader2 = document.createElement('h5');
  bodyHeader2.setAttribute('class', 'card-title');
  bodyHeader2.textContent = 'menu2';

  const bodyText2 = document.createElement('p');
  bodyText2.setAttribute('class', 'card-text');
  bodyText2.textContent = '$25';

  cardDiv2.appendChild(cardImg2);
  cardDiv2.appendChild(cardBody2);
  cardBody2.appendChild(bodyHeader2);
  cardBody2.appendChild(bodyText2);

  menuDiv.appendChild(cardDiv2);
  main.appendChild(menuDiv);

  // card 3

  const cardDiv3 = document.createElement('div');
  cardDiv3.setAttribute('class', 'card');
  cardDiv3.setAttribute('style', 'width: 18rem;');

  const cardImg3 = document.createElement('img');
  cardImg3.setAttribute('class', 'card-img-top');
  cardImg3.setAttribute('src', '../../dist/c5b2e5790c1d5582aa92ac40667b0779.jpg');

  const cardBody3 = document.createElement('div');
  cardBody3.setAttribute('class', 'card-body text-dark');

  const bodyHeader3 = document.createElement('h5');
  bodyHeader3.setAttribute('class', 'card-title');
  bodyHeader3.textContent = 'menu3';

  const bodyText3 = document.createElement('p');
  bodyText3.setAttribute('class', 'card-text');
  bodyText3.textContent = '$15';

  cardDiv3.appendChild(cardImg3);
  cardDiv3.appendChild(cardBody3);
  cardBody3.appendChild(bodyHeader3);
  cardBody3.appendChild(bodyText3);

  menuDiv.appendChild(cardDiv3);
  main.appendChild(menuDiv);
};

export default menu4Page;
