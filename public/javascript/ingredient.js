(function () {
    
    function getCategories() {
        httpGet('/category')
            .then(buildCategoriesList)
            .catch(showErrorMessage);
    }

    function buildCategoriesList() {

    }
})();