const contactPage = () => {
  document.querySelector(".main").innerHTML = ""
  const main = document.querySelector('.main')
  const p = document.createElement('p')
  p.textContent = 'contact'
  main.appendChild(p)
}

export default contactPage 
