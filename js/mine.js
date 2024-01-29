let close = document.querySelector("close");
let list = document.querySelector(".list");

let searchByLetter = document.getElementById("#searchLetter");
let search = document.querySelector(".search")
let searchBage = document.querySelector(".searchBage")
let categories = document.querySelector(".categories")
let categoriesBage = document.querySelector(".categoriesBage")
let categoriesdetails1 = document.querySelector(".categoriesdetails1")
let home = document.querySelector(".home")
let subHome = document.querySelector(".subHome")
let area = document.querySelector(".area")
let areaBage = document.querySelector(".areaBage")
let SubAreaBage = document.querySelector(".SubAreaBage")
let ingredients = document.querySelector(".ingredients")
let ingredientsPage = document.querySelector(".ingredientsPage")
let ingredientsSubPage = document.querySelector(".ingredientsSubPage")
let sRow1 = document.querySelector(".sRow1")
let contactUs = document.querySelector(".contactUs")
let contactUsPage = document.querySelector(".contactUsPage")

search.addEventListener("click", function () {
        searchBage.classList.remove("d-none")
        home.classList.add("d-none")
        categoriesBage.classList.add("d-none")
        subHome.classList.add("d-none")
        ingredientsPage.classList.add("d-none")
        categoriesdetails1.classList.add("d-none")
        areaBage.classList.add("d-none")
        SubAreaBage.classList.add("d-none")
        ingredientsSubPage.classList.add("d-none")
        contactUsPage.classList.add("d-none")
       

})
categories.addEventListener("click", function(){
        categoriesBage.classList.remove("d-none")
        home.classList.add("d-none")
        searchBage.classList.add("d-none")
        subHome.classList.add("d-none")
        ingredientsPage.classList.add("d-none")
        areaBage.classList.add("d-none")
        SubAreaBage.classList.add("d-none")
        ingredientsSubPage.classList.add("d-none")
        contactUsPage.classList.add("d-none")

})
area.addEventListener("click", function(){

        areaBage.classList.remove("d-none")
        categoriesBage.classList.add("d-none")
        home.classList.add("d-none")
        searchBage.classList.add("d-none")
        subHome.classList.add("d-none")
        ingredientsPage.classList.add("d-none")
        SubAreaBage.classList.add("d-none")
        ingredientsSubPage.classList.add("d-none")
        contactUsPage.classList.add("d-none")
})

ingredients.addEventListener("click", function(){
        areaBage.classList.add("d-none")
        SubAreaBage.classList.add("d-none")
        categoriesBage.classList.add("d-none")
        home.classList.add("d-none")
        searchBage.classList.add("d-none")
        subHome.classList.add("d-none")
        categoriesdetails1.classList.add("d-none")
        ingredientsPage.classList.remove("d-none")
        ingredientsSubPage.classList.add("d-none")
        contactUsPage.classList.add("d-none")
})
contactUs.addEventListener("click", function () {
        contactUsPage.classList.remove("d-none")
        areaBage.classList.add("d-none")
        SubAreaBage.classList.add("d-none")
        categoriesBage.classList.add("d-none")
        home.classList.add("d-none")
        searchBage.classList.add("d-none")
        subHome.classList.add("d-none")
        categoriesdetails1.classList.add("d-none")
        ingredientsPage.classList.add("d-none")
        ingredientsSubPage.classList.add("d-none")

})


$("#sideBar .close").hide();


let innerWidth = $(".InnerSideBar").innerWidth();
$("#sideBar").css('left', -innerWidth)


$("#sideBar .close").click(function(){
        $("#sideBar").animate({left : -innerWidth } , 500)  
        $("#sideBar .list").show();
        $("#sideBar .close").hide();
       
})

$("#sideBar .list").click(function(){
        $("#sideBar").animate({left : "0px"} , 500)
        $("#sideBar .list").hide();
        $("#sideBar .close").show();
        
})

$(document).ready(function() {
        $(".loadingScreen").fadeOut(1000);
        $("body").css("overflow","auto")
    })



//Fetch Api categories
async function getCategories() 
{
        $(".InnerLoadingScreen").fadeIn(500);
        let category =  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        let categoryData = await category.json()
      
        return categoryData
}

// display categories
async function displayCategories(data) {
        let c ="";
        let categoryDataa = data.categories
        for(let i = 0 ; i <categoryDataa.length ; i++ ){
                c +=`      
                <div onclick="displayCategoriesDetails('${categoryDataa[i].strCategory}')" class="col-md-3 col-sm-1 mt-5" >
                 <div class="categoriesOne position-relative overflow-hidden">
                  <img src="${categoryDataa[i].strCategoryThumb}" alt="" class="img-fluid">
                  <div class="layerOne text-center fs-3 fw-medium">${categoryDataa[i].strCategory}
                  <p class="fs-6 fw-normal">${categoryDataa[i].strCategoryDescription}</p>
                  </div>
                  </div>
                </div>
                `
        }
        document.getElementById("cat").innerHTML += c
  
}

//displayCategoriesDetails

async function displayCategoriesDetails(strCategory) {
        $(".InnerLoadingScreen").fadeIn(500);
        let categor = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
        let categoriesDetails = await categor.json()


        categoriesBage.classList.add("d-none")
        categoriesdetails1.classList.remove("d-none")

        
        let c = "";
        for(let i = 0 ; i <categoriesDetails.meals.length ; i++){
                c+= `      
                <div onclick="displayMealDetails(${categoriesDetails.meals[i].idMeal})" class="col-md-3 mt-5">
                <div class="cDetails position-relative overflow-hidden ">
                  <img src="${categoriesDetails.meals[i].strMealThumb}" alt="" class="img-fluid pic">
                  <div class="layerTwo ps-3 pt-2 fs-3 d-flex align-items-center"> ${categoriesDetails.meals [i].strMeal} </div>
                </div>
              </div>`
        }
        document.getElementById("categoriesDetails").innerHTML = c 
  
        
}

//Fetch Api area 
async function getArea() {
        $(".InnerLoadingScreen").fadeIn(500);
        let resArea = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        let areaData = await resArea.json()
        return areaData    
}

//display area meals
async function displayArea(data) {
        let cartoona = ""; 
        let areaD = data.meals

        for (let i = 0; i < areaD.length; i++) {
            cartoona += `
            <div  onclick="displayAreaDetails('${areaD[i].strArea}')" class="col-md-3">
                    <i class="fa-solid fa-house-laptop fa-4x pt-2"></i>
                            <h3>${areaD[i].strArea}</h3>  
            </div> `
        }
        document.getElementById("area").innerHTML += cartoona
}

//display area details
async function displayAreaDetails(area) {
        $(".InnerLoadingScreen").fadeIn(500);
        let a = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        let areaDetails = await a.json()
        areaInfo = areaDetails.meals

        SubAreaBage.classList.remove("d-none")
        areaBage.classList.add("d-none")
        let ar=""
        for(let i = 0; i< areaInfo.length; i++){
                ar+=`
                <div class="col-md-3">
                <div onclick="displayMealDetails(${areaInfo[i].idMeal})" class="area position-relative overflow-hidden mt-5 ">
                  <img src="${areaInfo[i].strMealThumb}" alt="" class="img-fluid ">
                  <div class="LayerThree fs-4 d-flex align-items-center">${areaInfo[i].strMeal}</div>
                </div>
              </div>`
        }
        document.getElementById("subArea").innerHTML = ar
        
}

//Fetch Api ingredintes

async function getIngredients() {

        $(".InnerLoadingScreen").fadeIn(500);
        let i = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let IngredientsData = await i.json()
        displayIngredients(IngredientsData.meals.slice(0,20))
}

// display Ingredients
async function displayIngredients(data) {
        let allIngredients= data
        let I ="";
        for(let i = 0 ; i< allIngredients.length; i++){
                I +=`
                <div onclick="displayIngredientsDetails('${allIngredients[i].strIngredient}')" class="col-md-3 ">
                <i class="fa-solid fa-drumstick-bite icon mt-5"></i>
                <h3> ${allIngredients[i].strIngredient}</h3>
                <p class ="fs-6">${allIngredients[i].strDescription.slice(0,100)}</p>
              </div>
                `
        }
        document.getElementById("ingredientSpace").innerHTML +=I
}

// display Ingredients Details
async function displayIngredientsDetails(ing){
        $(".InnerLoadingScreen").fadeIn(500);

        let d = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
        let ingDeatils = await d.json()

        ingredientsSubPage.classList.remove("d-none")
        ingredientsPage.classList.add("d-none")
        console.log(ingDeatils);
        let c ="";
        for(let i = 0 ; i <ingDeatils.meals.length; i++){
                c+=` 
                <div onclick="displayMealDetails(${ingDeatils.meals[i].idMeal})" class="col-md-3 mt-5">
                <div class="subIng position-relative overflow-hidden">
                  <img src="${ingDeatils.meals[i].strMealThumb}" alt="" class="img-fluid">
                  <div class="layerFour">${ingDeatils.meals[i].strMeal}</div>
                </div>
              </div>`
        }
        document.getElementById('ingredientSubSpace').innerHTML +=c

}
//Fetch Api meals
async function getMeal() 
{
        $(".InnerLoadingScreen").fadeIn(500);
        let meal =  await fetch("https://themealdb.com/api/json/v1/1/search.php?s=")
        let mealData = await meal.json()
        return mealData
}



//display meals
async function displayMeals(data){
        let t ="";
        let mealDataa = data.meals
        for( let i = 0; i < mealDataa.length  ; i++){
                t += `   
                <div onclick="displayMealDetails(${mealDataa[i].idMeal})" class="col-md-3 col-sm-1 mt-5 display">
                <div class="meal position-relative overflow-hidden">
                  <img src="${mealDataa[i].strMealThumb}" alt="" class="img-fluid mainImage">
                  <div class="layer ps-3 pt-2 fs-3 d-flex align-items-center">${mealDataa[i].strMeal}</div>
                  </div>
                </div>`
        }
        document.getElementById("meals").innerHTML += t



}


async function displayMealDetails(idMeal) {


        $(".InnerLoadingScreen").fadeIn(500);
        let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        let mealDetails = await meals.json()

        home.classList.add("d-none")
        subHome.classList.remove("d-none")
        categoriesdetails1.classList.add("d-none")
        SubAreaBage.classList.add("d-none")
        ingredientsSubPage.classList.add("d-none")
        ingredientsPage.classList.add("d-none")
        searchBage.classList.add("d-none")

        let t="";
        for(let i = 0 ; i< mealDetails.meals.length ; i++){
                t += `   
                <div class="col-md-4">
                <img src="${mealDetails.meals[i].strMealThumb}" alt="" class="img-fluid rounded-2">
                <p class="mealName fs-1 fw-medium">${mealDetails.meals[i].strMeal}</p>
                </div>
                <div class="col-md-8">
                <h2>Instructions</h2>
                <p class="Instructions">${mealDetails.meals[i].strInstructions}</p>
                <h2 class="area">Area: ${mealDetails.meals[i].strArea}</h2>
                <h2 class="category"> Category: ${mealDetails.meals[i].strCategory}</h2>
                <h2 class="recipes">Recipes : ${mealDetails.meals[i].ingredients}</h2>
                <h2 class="tags">Tags : ${mealDetails.meals[i].tagsStr}</h2>
                </div>`
        }    
        document.getElementById("fullMeal").innerHTML = t
}



//search

let searchName;
async function getSerachName(name) {


        $(".InnerLoadingScreen").fadeIn(500);
        let sName = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        searchName =  await sName.json()
        displaSerachByName()
}

 async function displaSerachByName(data) {

        categoriesdetails1.classList.add("d-none")
        home.classList.add("d-none")

        let c ="";
        for(let i = 0 ; i <searchName.meals.length; i++){
                c+=`
                <div onclick="displayMealDetails(${searchName.meals[i].idMeal})" class="col-md-3 col-sm-1 ">
                <div class=" searchL position-relative overflow-hidden">
                  <img src="${searchName.meals[i].strMealThumb}" alt="" class="img-fluid mainImage mt-4 ">
                  <div class="layerfive ps-3 pt-2 fs-3 d-flex align-items-center mt-4">${searchName.meals[i].strMeal}</div>
                  </div>
                </div>
                `
        }
        document.getElementById("sRow").innerHTML = c 
        
}

$("#searchByName").keyup(function (e) { 
        let s = e.target.value;
        getSerachName(s)
})


// search by letter 
let searchLetter;
async function getSearchByLetter(name){
        let letterS = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`)
        searchLetter = await letterS.json()
        displaySearchByLetter();
}

async function displaySearchByLetter() {
        let s ="";
        for(let i =0; i < searchLetter.meals ; i++){
                s +=`<div onclick="displayMealDetails(${searchName.meals[i].idMeal})" class="col-md-3 col-sm-1 ">
                <div class=" searchL position-relative overflow-hidden">
                  <img src="${searchLetter.meals[i].strMealThumb}" alt="" class="img-fluid mainImage mt-4 ">
                  <div class="layerfive ps-3 pt-2 fs-3 d-flex align-items-center mt-4">${searchLetter.meals[i].strMeal}</div>
                  </div>
                </div>`
        }
        
        document.getElementById("sRow").innerHTML =s
}

$("#searchByLetter").keyup(function(e){
        let l= e.target.value;
        getSearchByLetter(l);
})

vRow = document.getElementById("vRow")
function showContacts() {
        vRow.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
        <div class="container w-75 text-center">
            <div class="row g-4">
                <div class="col-md-6">
                    <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                    <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Special characters and numbers not allowed
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                    <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Email not valid *exemple@yyy.zzz
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                    <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid Phone Number
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                    <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid age
                    </div>
                </div>
                <div class="col-md-6">
                    <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                    <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid password *Minimum eight characters, at least one letter and one number:*
                    </div>
                </div>
                <div class="col-md-6">
                    <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                    <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid repassword 
                    </div>
                </div>
            </div>
            <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
        </div>
    </div> `
        submitBtn = document.getElementById("submitBtn")
    
    
        document.getElementById("nameInput").addEventListener("focus", () => {
            nameInputTouched = true
        })
    
        document.getElementById("emailInput").addEventListener("focus", () => {
            emailInputTouched = true
        })
    
        document.getElementById("phoneInput").addEventListener("focus", () => {
            phoneInputTouched = true
        })
    
        document.getElementById("ageInput").addEventListener("focus", () => {
            ageInputTouched = true
        })
    
        document.getElementById("passwordInput").addEventListener("focus", () => {
            passwordInputTouched = true
        })
    
        document.getElementById("repasswordInput").addEventListener("focus", () => {
            repasswordInputTouched = true
        })
    }
    
    let nameInputTouched = false;
    let emailInputTouched = false;
    let phoneInputTouched = false;
    let ageInputTouched = false;
    let passwordInputTouched = false;
    let repasswordInputTouched = false;
    
    
    
    
    function inputsValidation() {
        if (nameInputTouched) {
            if (nameValidation()) {
                document.getElementById("nameAlert").classList.replace("d-block", "d-none")
    
            } else {
                document.getElementById("nameAlert").classList.replace("d-none", "d-block")
    
            }
        }
        if (emailInputTouched) {
    
            if (emailValidation()) {
                document.getElementById("emailAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("emailAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
        if (phoneInputTouched) {
            if (phoneValidation()) {
                document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("phoneAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
        if (ageInputTouched) {
            if (ageValidation()) {
                document.getElementById("ageAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("ageAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
        if (passwordInputTouched) {
            if (passwordValidation()) {
                document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("passwordAlert").classList.replace("d-none", "d-block")
    
            }
        }
        if (repasswordInputTouched) {
            if (repasswordValidation()) {
                document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
    
        if (nameValidation() &&
            emailValidation() &&
            phoneValidation() &&
            ageValidation() &&
            passwordValidation() &&
            repasswordValidation()) {
            submitBtn.removeAttribute("disabled")
        } else {
            submitBtn.setAttribute("disabled", true)
        }
    }
    
    function nameValidation() {
        return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
    }
    
    function emailValidation() {
        return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
    }
    
    function phoneValidation() {
        return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
    }
    
    function ageValidation() {
        return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
    }
    
    function passwordValidation() {
        return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
    }
    
    function repasswordValidation() {
        return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
    }

//start app
 async function startApp() {
      let mealData = await getMeal() 
      displayMeals(mealData)  
      
      let categoryData = await getCategories()
      displayCategories(categoryData)

       let a = await getArea()
       displayArea(a)

       let i = await getIngredients()
       showContacts() 
       
}
startApp()