// fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
//     .then(res => res.json())
//     .then(data => displayFoods(data.meals[0]));



function searchFood(letter) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            // console.log(data.meals[0].strMeal);
            displayFoods(data.meals);
        });
}

const getLetter = () => {
    const inputLetter = document.getElementById('input-text').value;
    searchFood(inputLetter);
}
const displayFoods = foods => {
    const foodAreaDiv = document.getElementById('foodArea');
    foodAreaDiv.innerText = "";

    foods.forEach(meal => {
        const foodItemDiv = document.createElement('div');
        foodItemDiv.className = 'meals';
        const foodInfo = `
        <img src="${meal.strMealThumb
        }" width= "300" height="200">
        <h3 id='ingName' onclick="displayDetails('${meal.strMeal}')">${meal.strMeal}</h3>
        `;
        foodItemDiv.innerHTML = foodInfo;
        foodAreaDiv.appendChild(foodItemDiv);

    });

    // for (let i = 0; i < foods.length; i++) {
    //     const meal = foods[i];
    //     const foodItemDiv = document.createElement("div");
    //     foodItemDiv.className = 'meals';
    //     // const foodInfo = `
    //     //     <img src="${meal.strMealThumb
    //     //     }" width= "40" height="50">
    //     //     <h3 class="food-name">${meal.strMeal}</h3>
    //     //     `;
    //     const foodInfo = `<h3 class="food-name">${meal.strMeal}<h3>`
    //     foodItemDiv.innerHTML = foodInfo;
    //     // console.log(foodItemDiv.innerText);
    //     foodAreaDiv.appendChild(foodItemDiv);

    // }
}

const displayDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data.meals[0]);
            renderFoodInfo(data.meals[0]);
        });
    const foods = document.getElementById('mainArea');
    const foodDetails = document.getElementById('foodDetails');
    foods.style.display = 'none';
    foodDetails.style.display = 'block';

    // foodDetails.style.textAlign = 'center';
}

// document.getElementById('ingName').addEventListener('click', function() {
//     const ingName = document.getElementById('ingName').innerText;
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingName}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             // getIngredients(data.meals)
//             console.log(data.meals);
//         })
// })

const renderFoodInfo = food => {
    const foodDetails = document.getElementById('foodDetails');
    foodDetails.innerHTML = `
    <img src="${food.strMealThumb
    }" width= "500" height="400">
    <h3>${food.strMeal}</h3>
    <h4> Ingredients </h4>
    <ul>
    <li>${food.strIngredient1}</li>
    <li>${food.strIngredient2}</li>
    <li>${food.strIngredient3}</li>
    <li>${food.strIngredient4}</li>
    <li>${food.strIngredient5}</li>
    <li>${food.strIngredient6}</li>
    <ul/>`
}