(function () {
    
    getCategories();
    document.getElementsByName('ingredient')[0].onsubmit = saveIngredient;

    function getCategories() {
        http.httpGet('/category')
            .then(buildCategoriesList)
            .catch(showErrorMessage);
    }

    function buildCategoriesList(categories) {
        if (!categories) return;
        const selectEl = document.getElementsByName('category')[0];
        categories.forEach(category => {
            selectEl.innerHTML += `<option value="${category}">${category}</option>`;
        })
    }

    function saveIngredient(event) {
        event.preventDefault();
        const ingredient = {
            product: document.getElementsByName('name')[0].value,
            category: document.getElementsByName('category')[0].value
        };

        http.httpPost('/ingredient', ingredient)
            .then(response => window.location = '/')
            .catch(showErrorMessage);
    }

})();