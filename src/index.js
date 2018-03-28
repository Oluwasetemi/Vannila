let x = 0;
document.getElementById("app").innerHTML = `
<h1>Welcome to Vannila and explore the JS wonderland</h1>
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
<br>
<button class="plus">+</button>
<span class="result"></span>
<button class="minus">-</button>
`;
let buttonPlus = document.querySelector('.plus')
let buttonMinus = document.querySelector('.minus')
let result = document.querySelector('.result');
result.textContent = x
buttonPlus.addEventListener('click', () => {
  console.log(x++)
  // x+=1
  result.textContent = x

})
buttonMinus.addEventListener('click', () => {
  console.log(x--)
  // x--
result.textContent = x
})
