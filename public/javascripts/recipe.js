(function () {
    document.getElementsByName('new-recipe')[0].onsubmit = saveRecipe;
    document.getElementById('add-ingredient').onclick = addIngredient;
    loadIngredients();

    let ingredients = [];
    
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

    function addIngredient(event) {
        event.preventDefault();

        ingredients.push({
            product: document.getElementsByName('ingredients')[0].value,
            qtd: document.getElementsByName('ingredients-qtd')[0].value,
            units: document.getElementsByName('ingredients-units')[0].value,
        });

        loadIngredientsList();
    }

    function excludeIngredients(event) {
        var ingredientPos = int.Parse(event.target.getAttribute('data-target'));
        ingredients = ingredients.splice(ingredientPos, 1);

        loadIngredientsList();
    }

    function loadIngredientsList() {
        var listEl = document.getElementById('ingredients-list');
        listEl.innerHTML = '';

        ingredients.forEach((ing, index) => {
            listEl.innerHTML +=
                `<div>
                    <span>${ing.product}</span>
                    <span>${ing.qtd} ${ing.units}</span>
                    <button data-target="${index}">Excluir</button>  
                <div>`
            
        });
        
        listEl.querySelectorAll("button").forEach(btn => btn.onclick = excludeIngredients);
    }

})();