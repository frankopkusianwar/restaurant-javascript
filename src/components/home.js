const homePage = () => {
  document.querySelector(".main").innerHTML = ""
  const main = document.querySelector('.main')
  const p = document.createElement('p')
  p.textContent = 'home'
  main.appendChild(p)
}
export default homePage 