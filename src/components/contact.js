const contactPage = () => {
  document.querySelector('.main').innerHTML = '';
  const main = document.querySelector('.main');
  
  const contactDiv = document.createElement('div')
  contactDiv.setAttribute('class', 'row')

  const contactDiv1 = document.createElement('div')
  contactDiv1.setAttribute('class', 'col-5 bg-white text-dark p-3')
  contactDiv1.innerHTML = `<h3 class="mb-3">Open Time</h3>
  <div class="row">
    <div class="col-6">
      <p><b>MON :</b> 08:00 AM - 05:00 PM</P>
      <p><b>TUE :</b> 08:00 AM - 05:00 PM</P>
      <p><b>WED :</b> 08:00 AM - 05:00 PM</P>
    </div>
    <div class="col-6">
      <p><b>THUR :</b> 08:00 AM - 05:00 PM</P>
      <p><b>FRI :</b> 08:00 AM - 05:00 PM</P>
      <p><b>SAT :</b> 08:00 AM - 05:00 PM</P>
      <p><b>SUN :</b> CLOSED</P>
    </div>
    <div>
  `

  const btn = document.createElement('div')
  btn.setAttribute('class', 'col-2')


  const contactDiv2 = document.createElement('div')
  contactDiv2.setAttribute('class', 'col-5 bg-white text-dark')
  contactDiv2.innerHTML = `<h3>Contact Us</h3>
  <p>MON:</P>
  `



  contactDiv.appendChild(contactDiv1)
  contactDiv.appendChild(btn)
  contactDiv.appendChild(contactDiv2)


  main.appendChild(contactDiv)



};

export default contactPage;
