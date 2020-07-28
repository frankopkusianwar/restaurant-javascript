const homePage = () => {
  document.querySelector(".main").innerHTML = ""
  const main = document.querySelector('.main')
  const p1 = document.createElement('p')
  p1.textContent = 'Welcone To'
  p1.setAttribute('class', 'welcome')

  const p2 = document.createElement('p')
  p2.textContent = 'Food Heaven'
  p2.setAttribute('class', 'retaurant-name')

  const p3 = document.createElement('p')
  p3.textContent = 'our master chefs serve the most delicious variety of the freshest food all over the world'
  p3.setAttribute('class', 'words')
  
  main.appendChild(p1)
  main.appendChild(p2)
  main.appendChild(p3)
}
export default homePage 