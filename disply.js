import{categoryAr,theArea,ingreaad,meaal,displycoun,showOfIngred,menue,discrip,searchItems,theLeter} from './index.js'
//defult
export function displyData() {
  let cartona = "";
  for (let i = 0; i < menue.meals.length; i++) {
    cartona += `<div class="showData col-md-3 card overflow-hidden rounded-2">
      <div class="img position-relative overflow-hidden rounded-2">
        <img src=${menue.meals[i].strMealThumb} class="w-100 rounded-2" alt="" />
        <div class="wall position-absolute d-flex align-items-center rounded-2 p-2">
          <h3>${menue.meals[i].strMeal}</h3>
        </div>
      </div>
    </div>`;
  }
  document.getElementById("cards").innerHTML = cartona;
}
//disply ingeadiant

export function showdescription(){
  let cartona= '';
   cartona+=
   ` <div class="col-md-4 picture">
        <img src=${discrip.meals[0].strMealThumb} class="w-100 rounded-3" alt="">
        <h3${discrip.meals[0].strTags}</h3>
    </div>
    <div class="col-md-8 description">
      <h2>Instructions</h2>
      <p>${discrip.meals[0].strInstructions}</p>
<h2><span>area:</span> ${discrip.meals[0].strArea}</h2>
<h2><span>Category :</span> ${discrip.meals[0].strCategory}</h2>
<h2><span>Recipes :</h2>
  <ul class="list-unstyled d-flex flex-wrap g-3">
    <li class="alert alert-info m-2 p-1">${discrip.meals [0].strIngredient1}</li>
    <li class="alert alert-info m-2 p-1">${discrip.meals [0].strIngredient2}</li>
    <li class="alert alert-info m-2 p-1">${discrip.meals [0].strIngredient3}</li>
    <li class="alert alert-info m-2 p-1">${discrip.meals [0].strIngredient4}</li>
    <li class="alert alert-info m-2 p-1">${discrip.meals [0].strIngredient5}</li>
    <li class="alert alert-info m-2 p-1">${discrip.meals [0].strIngredient6}</li>
    <li class="alert alert-info m-2 p-1">${discrip.meals [0].strIngredient7}</li>
  </ul>
  <h2>tags:</h2>
  <a target="_blank" href=${discrip.meals [0].strSource} class="btn btn-success">source</a>
  <a target="_blank" href=${discrip.meals [0].strYoutube} class="btn btn-danger">Youtube</a>
      `

  document.getElementById('descrip').innerHTML=cartona;  
}

//category
export function displyCategory(){
  let cartona= '';
  for (let i = 0; i < categoryAr.categories.length; i++) {
      cartona+=`<div class="showMeal col-md-3 card rounded-2">
          <div class="img position-relative overflow-hidden rounded-2">
            <img src=${categoryAr.categories[i].strCategoryThumb} class="w-100 rounded-2" alt="" />
            <div class="wall position-absolute d-flex text-center flex-column rounded-2 p-2">
              <h3>${categoryAr.categories[i].strCategory}</h3>
              <p>${categoryAr.categories[i].strCategoryDescription.split(' ').slice(0,20).join(' ')}</p>
            </div>
          </div>
        </div>
      `
  }
  document.getElementById('categorey').innerHTML=cartona;  
}
//area
export function displyArea() {
let cartona='';
for (let i = 0; i < theArea.meals.length; i++) {
  cartona+=`<div  class="countryMeal col-md-3 text-center">
              <i class="w-100 fa-solid fa-house-laptop fa-4x"></i>
              <h3>${theArea.meals[i].strArea}</h3>
          </div>
  `;
  document.getElementById('countries').innerHTML=cartona
}
}
//ingradiant
export function displyIngread() {
  let cartona='';
  for (let i = 0; i < 20; i++) {
   cartona+=`<div class="theIngred col-md-3 text-center">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3>${ingreaad.meals[i].strIngredient}</h3>
            <p>${ingreaad.meals[i].strDescription.split(' ').slice(0,20).join(' ')}</p>
          </div>`
  }
  document.getElementById('ingread').innerHTML=cartona;
}
//meal
export function displyMeal(){
  let cartona ='';
  for (let i = 0; i < meaal.meals.length; i++) {
   
    cartona+=`<div class="dsiplyDiscrip col-md-3 s overflow-hidden rounded-2">
        <div class="img position-relative overflow-hidden rounded-2">
          <img src=${meaal.meals[i].strMealThumb} class="w-100 rounded-2" alt="" />
          <div class="wall position-absolute d-flex align-items-center rounded-2 p-2">
            <h3>${meaal.meals[i].strMeal}</h3>
          </div>
        </div>
      </div>`
  }
  document.getElementById('meals').innerHTML=cartona;
}
//inside area
export function displyFood(){
 let cartona='';
  for (let i = 0; i < displycoun.meals.length; i++) {
   cartona+=`<div class="col-md-3 cardd overflow-hidden rounded-2">
        <div class="img position-relative overflow-hidden rounded-2">
          <img src=${displycoun.meals[i].strMealThumb} class="w-100 rounded-2" alt="" />
          <div class="wall position-absolute d-flex align-items-center rounded-2 p-2">
            <h3>${displycoun.meals[i].strMeal}</h3>
          </div>
        </div>
      </div>`
  }
  document.getElementById('foodd').innerHTML=cartona;
  
}
//inside ingred
export function displyOfIngread(){
  let cartona='';
   for (let i = 0; i < showOfIngred.meals.length; i++) {
    cartona+=`<div class="col-md-3 cardIngred card overflow-hidden rounded-2">
         <div class="img position-relative overflow-hidden rounded-2">
           <img src=${showOfIngred.meals[i].strMealThumb} class="w-100 rounded-2" alt="" />
           <div class="wall position-absolute d-flex align-items-center rounded-2 p-2">
             <h3>${showOfIngred.meals[i].strMeal}</h3>
           </div>
         </div>
       </div>`
   }
   document.getElementById('picIngred').innerHTML=cartona;
 }
 //disply name 
 export function displyResult() {
  let cartona = '';
  for (let i = 0; i < searchItems.meals.length; i++) {
    cartona += `
      <div class="col-md-3 nameDescrip card overflow-hidden rounded-2">
        <div class="img position-relative overflow-hidden rounded-2">
          <img src=${searchItems.meals[i].strMealThumb} class="w-100 rounded-2" alt="" />
          <div class="wall position-absolute d-flex align-items-center rounded-2 p-2">
            <h3>${searchItems.meals[i].strMeal}</h3>
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById('the-cards').innerHTML = cartona;
}
//latter
export function displyLatter() {
  let cartona = '';
  for (let i = 0; i < theLeter.meals.length; i++) {
    cartona += `
      <div class="col-md-3 latterDescrip card overflow-hidden rounded-2">
        <div class="img position-relative overflow-hidden rounded-2">
          <img src=${theLeter.meals[i].strMealThumb} class="w-100 rounded-2" alt="" />
          <div class="wall position-absolute d-flex align-items-center rounded-2 p-2">
            <h3>${theLeter.meals[i].strMeal}</h3>
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById('the-cards').innerHTML = cartona;
}