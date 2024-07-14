import{displyCategory,displyMeal,displyData,showdescription,displyResult,displyLatter} from './disply.js'
export let menue = [];
export let discrip =[];
async function information() {
  let theData = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s"
  );
  let response = await theData.json();
  menue = response;
  displyData();
  document.getElementById('spiner').classList.add('d-none',);
  let showData = document.querySelectorAll('.showData');
  for (let i = 0; i < showData.length; i++) {
    showData[i].addEventListener('click', async function(e) {
      if (document.getElementById('spiner').classList.contains('d-none')) {
        document.getElementById('spiner').classList.remove('d-none')
      }
      let theData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${menue.meals[i].idMeal}`);
      let response = await theData.json();
      discrip = response;
      console.log(discrip);
      if (e.target.id != 'searchList' || e.target.id != 'categoreyList' || e.target.id != 'areaList' || e.target.id != 'ingreadList' || e.target.id != 'contactList') {
        document.getElementById('description').classList.remove('d-none');
        document.querySelector('.defulte').classList.add('d-none');
        showdescription();
        document.getElementById('spiner').classList.add('d-none')
      } else {
        if (e.target.id == 'searchList' || e.target.id == 'categoreyList' || e.target.id == 'areaList' || e.target.id == 'ingreadList' || e.target.id == 'contactList') {
          document.getElementById('description').classList.add('d-none');
          document.getElementById(`${e.target.id}`).classList.remove('d-none');
          sidenav();
        }
      }
    });
  }
}

information();
//side nave
$(".close-btn").on("click",function() {
  sidenav()
})
 function sidenav() {
  let thewidth = $(".list").innerWidth();
  document.getElementById("side-nave").style.left = `${thewidth}`;
  console.log($(".list").innerWidth());
  if ($(".side-nave").css("left") === "0px") {
    
    $(".side-nave").animate({ left: `-${thewidth}` });
    document
      .querySelector("#change")
      .classList.replace("open-close-icon", "fa-bars");
    document.querySelector("#change").classList.remove("fa-x");
    $(".the-list li").animate({ top: "300px", left: "0px" }, 500);
  } else {
    $(".side-nave").animate({ left: `0px` });
    document
      .querySelector("#change")
      .classList.replace("fa-bars", "open-close-icon");
    document.querySelector("#change").classList.add("fa-x");
    $(".the-list li ").animate({ top: "0", left: "30px" }, 1000);
  }
};
// search
document.addEventListener('click', function(e) {
  if ( e.target.id=='searchList'|| e.target.id=='categoreyList'|| e.target.id=='areaList'||e.target.id=='ingreadList'||e.target=='contactList') {
    if ( e.target.id=='searchList'&&document.querySelector('.searh-inputs').classList.contains('d-none')) {
      document.querySelector('.searh-inputs').classList.remove('d-none')
      document.querySelector('.defulte ').classList.add('d-none')
      sidenav()
     }else{
      document.getElementById(`${e.target.id}`).classList.remove('d-none') 
     }
    }
   
});
let searchName=document.getElementById('searchName')
let searchLatter=document.getElementById('searchLatter')
export let searchItems=[];
searchName.addEventListener('keyup',async function () {
  if (document.getElementById('spiner').classList.contains('d-none')) {
    document.getElementById('spiner').classList.remove('d-none')
  }
let getData=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName.value}`)
let response2 =await getData.json()
searchItems=response2;

displyResult()
document.getElementById('spiner').classList.add('d-none')
let nameDescrip = document.querySelectorAll('.nameDescrip');
  for (let i = 0; i < nameDescrip.length; i++) {
    nameDescrip[i].addEventListener('click', async function(e) {
      let theData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchItems.meals[i].idMeal}`);
      let response = await theData.json();
      discrip = response;
      console.log(discrip);
      if (e.target.id != 'searchList' || e.target.id != 'categoreyList' || e.target.id != 'areaList' || e.target.id != 'ingreadList' || e.target.id != 'contactList') {
        document.getElementById('description').classList.remove('d-none');
        document.querySelector('#searchInputs').classList.add('d-none');
        
        showdescription();
        
      } else {
        if (e.target.id == 'searchList' || e.target.id == 'categoreyList' || e.target.id == 'areaList' || e.target.id == 'ingreadList' || e.target.id == 'contactList') {
          document.getElementById('description').classList.add('d-none');
          document.getElementById(`${e.target.id}`).classList.remove('d-none');
          sidenav();
        }
      }
    });}

console.log(searchItems);
})

export let theLeter=[];
searchLatter.addEventListener('keyup',async function () {
  if (document.getElementById('spiner').classList.contains('d-none')) {
    document.getElementById('spiner').classList.remove('d-none')
  }
let getData=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLatter.value}`)
let response =await getData.json()
theLeter=response;

displyLatter()
document.getElementById('spiner').classList.add('d-none')

let latterDescrip = document.querySelectorAll('.latterDescrip');
  for (let i = 0; i < latterDescrip.length; i++) {
    latterDescrip[i].addEventListener('click', async function(e) {
      let theData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${theLeter.meals[i].idMeal}`);
      let response = await theData.json();
      discrip = response;
      console.log(discrip);
      if (e.target.id != 'searchList' || e.target.id != 'categoreyList' || e.target.id != 'areaList' || e.target.id != 'ingreadList' || e.target.id != 'contactList') {
        document.getElementById('description').classList.remove('d-none');
        document.querySelector('#searchInputs').classList.add('d-none');
        
        showdescription();
        
      } else {
        if (e.target.id == 'searchList' || e.target.id == 'categoreyList' || e.target.id == 'areaList' || e.target.id == 'ingreadList' || e.target.id == 'contactList') {
          document.getElementById('description').classList.add('d-none');
          document.getElementById(`${e.target.id}`).classList.remove('d-none');
          sidenav();
        }
      }
    });}
console.log(theLeter);
})

//category
document.addEventListener('click', function(e) {
 
  if ( e.target.id=='searchList'|| e.target.id=='categoreyList'|| e.target.id=='areaList'||e.target.id=='ingreadList'||e.target.id=='contactList'){
    if ( e.target.id=='categoreyList' &&document.querySelector('.category').classList.contains('d-none')) {
      if (document.getElementById('spiner').classList.contains('d-none')) {
        document.getElementById('spiner').classList.remove('d-none')
      }
      document.querySelector('.category').classList.remove('d-none')
    document.querySelector('.defulte').classList.add('d-none')
    sidenav()  
    document.getElementById('spiner').classList.add('d-none')

  }else{
    document.getElementById(`${ e.target.id}`).classList.remove('d-none')
  }
    }
    
});
export let meaal=[];
 export let categoryAr=[];
async function getCategory () {
  let theData=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  let response = await theData.json();
  categoryAr=response;
  console.log(categoryAr);
  displyCategory(); 

 let showMeal= document.querySelectorAll('.showMeal');
 for (let i = 0; i < showMeal.length; i++) {
  showMeal[i].addEventListener('click',async function(e){
    if (document.getElementById('spiner').classList.contains('d-none')) {
      document.getElementById('spiner').classList.remove('d-none')
    }
    let theData=await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${categoryAr.categories[i].strCategory}`)
    let response = await theData.json()
    meaal=response;
    console.log(meaal);
    if ( e.target.id!='searchList'|| e.target.id!='categoreyList'|| e.target.id!='areaList'||e.target.id!='ingreadList'||e.target.id!='contactList'){
      document.getElementById('mealsins').classList.remove('d-none')
      document.getElementById('cate').classList.add('d-none')
      displyMeal()
      document.getElementById('spiner').classList.add('d-none')
      let dsiplyDiscrip = document.querySelectorAll('.dsiplyDiscrip');
  for (let i = 0; i < dsiplyDiscrip.length; i++) {
    dsiplyDiscrip[i].addEventListener('click', async function(e) {
      if (document.getElementById('spiner').classList.contains('d-none')) {
        document.getElementById('spiner').classList.remove('d-none')
      }
      let theData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meaal.meals[i].idMeal}`);
      let response = await theData.json();
      discrip = response;
      console.log(discrip);
      if (e.target.id != 'searchList' || e.target.id != 'categoreyList' || e.target.id != 'areaList' || e.target.id != 'ingreadList' || e.target.id != 'contactList') {
        document.getElementById('description').classList.remove('d-none');
        document.querySelector('#mealsins').classList.add('d-none');
        showdescription();
        document.getElementById('spiner').classList.add('d-none')
        
      } else {
        if (e.target.id == 'searchList' || e.target.id == 'categoreyList' || e.target.id == 'areaList' || e.target.id == 'ingreadList' || e.target.id == 'contactList') {
          document.getElementById('description').classList.add('d-none');
          document.getElementById(`${e.target.id}`).classList.remove('d-none');
          sidenav();
        }
      }
    });}
    }else{
      if ( e.target.id=='searchList'|| e.target.id=='categoreyList'|| e.target.id=='areaList'||e.target.id=='ingreadList'||e.target.id=='contactList'){
        document.getElementById('mealsins').classList.add('d-none')
        document.getElementById(`${ e.target.id}`).classList.remove('d-none')
        sidenav() 
      }
    }
})
  
 } 
}
getCategory()


 


//area
document.addEventListener('click', function(e) {
  if ( e.target.id=='categoreyList'|| e.target.id=='searchList'|| e.target.id=='areaList'||e.target.id=='ingreadList'||e.target.id=='contactList') {
    if ( e.target.id=='areaList' &&document.querySelector('#area').classList.contains('d-none')) {
      if (document.getElementById('spiner').classList.contains('d-none')) {
        document.getElementById('spiner').classList.remove('d-none')
      }
      document.querySelector('#area').classList.remove('d-none')
      document.getElementById('spiner').classList.add('d-none')
    document.querySelector('.defulte').classList.add('d-none')
    sidenav()  

  }else{
    document.getElementById(`${e.target.id}`).classList.remove('d-none')
  }
    }
    
});
import {displyArea,displyIngread,displyFood,displyOfIngread} from "./disply.js"
export let theArea=[];
export let displycoun=[];
async function getArea(){
  let theData= await fetch ('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  let response = await theData.json()
  theArea=response;
  console.log(theArea);
  
  displyArea()
  let countryMeal=document.querySelectorAll('.countryMeal');
  for (let i = 0; i < countryMeal.length; i++) {
    countryMeal[i].addEventListener('click',async function(e){
      if (document.getElementById('spiner').classList.contains('d-none')) {
        document.getElementById('spiner').classList.remove('d-none')
      }
      let theData=await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?a=${theArea.meals[i].strArea}`)
      let response = await theData.json();
      displycoun=response;
      console.log(displycoun);
      if ( e.target.id!='searchList'|| e.target.id!='categoreyList'|| e.target.id!='areaList'||e.target.id!='ingreadList'||e.target.id!='contactList'){
        document.getElementById('food-count').classList.remove('d-none')
        document.getElementById('area').classList.add('d-none')  
        displyFood()
        document.getElementById('spiner').classList.add('d-none')
        let cardd = document.querySelectorAll('.cardd');
  for (let i = 0; i < cardd.length; i++) {
    cardd[i].addEventListener('click', async function(e) {
      if (document.getElementById('spiner').classList.contains('d-none')) {
        document.getElementById('spiner').classList.remove('d-none')
      }
      let theData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${displycoun.meals[i].idMeal}`);
      let response = await theData.json();
      discrip = response;
      console.log(discrip);
      if (e.target.id != 'searchList' || e.target.id != 'categoreyList' || e.target.id != 'areaList' || e.target.id != 'ingreadList' || e.target.id != 'contactList') {
        document.getElementById('description').classList.remove('d-none');
        document.querySelector('#food-count').classList.add('d-none');
        showdescription();
        document.getElementById('spiner').classList.add('d-none')
      } else {
        if (e.target.id == 'searchList' || e.target.id == 'categoreyList' || e.target.id == 'areaList' || e.target.id == 'ingreadList' || e.target.id == 'contactList') {
          document.getElementById('description').classList.add('d-none');
          document.getElementById(`${e.target.id}`).classList.remove('d-none');
          sidenav();
        }
      }
    });}
        
      }else{
        if ( e.target.id=='searchList'|| e.target.id=='categoreyList'|| e.target.id=='areaList'||e.target.id=='ingreadList'||e.target.id=='contactList'){
          document.getElementById('food-count').classList.add('d-none')
          document.getElementById(`${ e.target.id}`).classList.remove('d-none')
          sidenav() 
        }
      }
  })
  }
 
}
getArea()
//ingreadiant
document.addEventListener('click', function(e) {
  if ( e.target.id=='categoreyList'|| e.target.id=='searchList'|| e.target.id=='areaList'||e.target.id=='ingreadList'||e.target.id=='contactList'){
    if ( e.target.id=='ingreadList' &&document.querySelector('#ingreadiant').classList.contains('d-none')) {
      if (document.getElementById('spiner').classList.contains('d-none')) {
        document.getElementById('spiner').classList.remove('d-none')
      }
      document.querySelector('#ingreadiant').classList.remove('d-none')
    document.querySelector('.defulte').classList.add('d-none')
    sidenav()  
    document.getElementById('spiner').classList.add('d-none')

  }else{
    document.getElementById(`${e.target.id}`).classList.remove('d-none')
  }
    }
    
});
export let ingreaad=[];
export let showOfIngred=[];
async function getIngread(){
  let theData=await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
  let response=await theData.json()
  ingreaad=response;
  
  displyIngread()
  
  console.log(ingreaad);
  let showIngred=document.querySelectorAll('.theIngred');
  for (let i = 0; i < showIngred.length; i++) {ingreaad.meals[i].strIngredient
    showIngred[i].addEventListener('click',async function(e){
      if (document.getElementById('spiner').classList.contains('d-none')) {
        document.getElementById('spiner').classList.remove('d-none')
      }
      let theData=await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingreaad.meals[i].strIngredient}`)
      let response = await theData.json();
      showOfIngred=response;
      console.log(showOfIngred);
      console.log(showIngred);
      if ( e.target.id!='searchList'|| e.target.id!='categoreyList'|| e.target.id!='areaList'||e.target.id!='ingreadList'||e.target.id!='contactList'){
        document.getElementById('ingread-pic').classList.remove('d-none')
        document.getElementById('ingreadiant').classList.add('d-none')
        displyOfIngread()
        document.getElementById('spiner').classList.add('d-none')
        
        let cardIngred = document.querySelectorAll('.cardIngred');
        for (let i = 0; i < cardIngred.length; i++) {
          cardIngred[i].addEventListener('click', async function(e) {
            if (document.getElementById('spiner').classList.contains('d-none')) {
              document.getElementById('spiner').classList.remove('d-none')
            }
            let theData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${showOfIngred.meals[i].idMeal}`);
            let response = await theData.json();
            discrip = response;
            console.log(discrip);
            if (e.target.id != 'searchList' || e.target.id != 'categoreyList' || e.target.id != 'areaList' || e.target.id != 'ingreadList' || e.target.id != 'contactList') {
              document.getElementById('description').classList.remove('d-none');
              document.querySelector('#ingread-pic').classList.add('d-none');
              
              showdescription();
              document.getElementById('spiner').classList.add('d-none')

            } else {
              if (e.target.id == 'searchList' || e.target.id == 'categoreyList' || e.target.id == 'areaList' || e.target.id == 'ingreadList' || e.target.id == 'contactList') {
                document.getElementById('description').classList.add('d-none');
                document.getElementById(`${e.target.id}`).classList.remove('d-none');
                sidenav();
              }
            }
          });}
      }else{
        if ( e.target.id=='searchList'|| e.target.id=='categoreyList'|| e.target.id=='areaList'||e.target.id=='ingreadList'||e.target.id=='contactList'){
          document.getElementById('ingread-pic').classList.add('d-none')
          document.getElementById(`${ e.target.id}`).classList.remove('d-none')
          sidenav() 
        }
      }
  })
}}
getIngread()
//contact-us
document.addEventListener('click', function(e) {
  if ( e.target.id=='categoreyList'|| e.target.id=='searchList'|| e.target.id=='areaList'||e.target.id=='ingreadList'||e.target.id=='contactList'){
    if ( e.target.id=='contactList' &&document.querySelector('#contactUs').classList.contains('d-none')) {
      document.querySelector('#contactUs').classList.remove('d-none')
    document.querySelector('.defulte').classList.add('d-none')
    sidenav()  
  }else{
    document.querySelector('#contactUs').classList.add('d-none')
    document.getElementById(`${e.target.id}`).classList.remove('d-none')
  }
    }
    
});
let nameInput=document.getElementById('nameInput')
let emailInput=document.getElementById('emailInput')
let phoneInput=document.getElementById('phoneInput')
let ageInput=document.getElementById('ageInput')
let passInput=document.getElementById('passInput')
let repassInput=document.getElementById('repassInput')
nameInput.addEventListener('keyup',function () {
 let text =nameInput.value;
let regex=/^[a-z]{3,20}/
if (regex.test(text) == true ) {
  nameInput.classList.add('is-valid')
  nameInput.classList.remove('is-invalid')
}else{
  nameInput.classList.add('is-invalid')
  nameInput.classList.remove('is-valid')
}
})
emailInput.addEventListener('keyup',function () {
 let text =emailInput.value;
let regex=/^[a-z]{3,20}[1-9]{1,10}@(gmail|hotmail|yahoo).com/
if (regex.test(text) == true ) {
  emailInput.classList.add('is-valid')
  emailInput.classList.remove('is-invalid')
}else{
  emailInput.classList.add('is-invalid')
  emailInput.classList.remove('is-valid')
}
})
ageInput.addEventListener('keyup',function () {
 let text =ageInput.value;
let regex=/^[1-9]{2}$/
if (regex.test(text) == true ) {
  ageInput.classList.add('is-valid')
  ageInput.classList.remove('is-invalid')
}else{
  ageInput.classList.add('is-invalid')
  ageInput.classList.remove('is-valid')
}
})
phoneInput.addEventListener('keyup',function () {
 let text =phoneInput.value;
let regex=/^(002|20)?01[0125][1-9]{8}$/
if (regex.test(text) == true ) {
  phoneInput.classList.add('is-valid')
  phoneInput.classList.remove('is-invalid')
}else{
  phoneInput.classList.add('is-invalid')
  phoneInput.classList.remove('is-valid')
}
})
passInput.addEventListener('keyup',function () {
 let text =passInput.value;
let regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
if (regex.test(text) == true ) {
  passInput.classList.add('is-valid')
  passInput.classList.remove('is-invalid')
}else{
  passInput.classList.add('is-invalid')
  passInput.classList.remove('is-valid')
}
})
//spiner
