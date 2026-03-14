const recipeList = document.getElementById("recipeList");

function getRecipes() {
  const query =
    document.getElementById("searchInput").value.trim() || "chicken";

  recipeList.innerHTML = "Loading...";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      if (!data.meals) {
        recipeList.innerHTML = `<p class="error">No recipes found</p>`;
        return;
      }

      recipeList.innerHTML = "";

      data.meals.slice(0, 5).forEach(meal => {
        recipeList.innerHTML += `
          <div class="recipe-card">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <div class="content">
              <h4>${meal.strMeal}</h4>
              <p><strong>Category:</strong> ${meal.strCategory}</p>
              <p><strong>Area:</strong> ${meal.strArea}</p>
              <a href="${meal.strSource || meal.strYoutube}" target="_blank">
                View Recipe
              </a>
            </div>
          </div>
        `;
      });
    })
    .catch(() => {
      recipeList.innerHTML = `<p class="error">Error loading recipes</p>`;
    });
}
