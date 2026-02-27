# projects related to DOM 

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 

## project1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='purple'){
      body.style.backgroundColor=e.target.id;
    }
  });
});

```
## project2 BMI solution code

```javascript
const form = document.querySelector('form');
// this use will give you empty values for height and weight
// const height=parseInt(document.querySelector('#height'))
// agar bahar likh denge submit event ke to jab page load hoga usi time empty values store ho jaayega isliye height aur wieght ki value submit ke baad select krre.
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if ((height === '' || height < 0 || isNaN(height))) {
    results.innerHTML = `your valid height is${height} `;
  } else if ((weight === '' || weight < 0 || isNaN(weight))) {
    results.innerHTML = `your valid weight is${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `${bmi}`;
    const finals=document.querySelector('#final')
    if(bmi>=24.9){
       finals.innerHTML=`you are overweight`
    }else if(bmi>=18.6 && bmi<24.9){
      finals.innerHTML=`you are in Normal range`
    }else{
      finals.innerHTML=`you are under weight`
    }

  }
});

```