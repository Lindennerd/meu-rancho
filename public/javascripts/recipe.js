(function () {
    document.getElementsByName('new-recipe')[0].onsubmit = saveRecipe;
    loadIngredients();

    function loadIngredients() {
        http.httpGet('/ingredient/list')
            .then(buildIngredientsList)
            .catch(showErrorMessage);
    }

    function buildIngredientsList(ingredients) {
        if (!ingredients) return;
        var ingredientsEl = document.getElementsByName('ingredients')[0];
        ingredients.forEach(ingredient => {
            ingredientsEl.innerHTML += `<option value="${ingredient.product}">${ingredient.product}</option>`;
        })
    }

    function saveRecipe(event) {
        event.preventDefault();
    }

})();