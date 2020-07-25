export const header = () => {
  const headerDiv = document.querySelector('.header')
  const h1 = document.createElement('h1')
  h1.textContent = 'Welcome to My Restaurant'
  headerDiv.appendChild(h1)
}
