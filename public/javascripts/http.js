window.http = (function () { 
    function httpGet(path) {
        return _fetch(path, 'GET');
    }
    
    function httpPost(path, data) {
        return _fetch(path, 'POST', data);
    }
    
    
    function httpPut(path, data) {
        return _fetch(path, 'PUT', data);
    }
    
    function httpDelete(path, data) {
        return _fetch(path, 'DELETE', data);
    }
    
    function _fetch(path, method, data) {
        return fetch(path, getOptions(method, data))
            .then(response => {
                if (response.ok || response.created)
                    return response.json()
                        .then(response => {
                            return Promise.resolve(response);
                        })
                else
                    return response.json()
                        .then(response => {
                            return Promise.reject(response.error);
                        })
            });
    }
    
    function getOptions(verb, data) {
        var options = {
            dataType: 'json',
            method: verb,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        if (data) {
            options.body = JSON.stringify(data);
        }
        return options;
    }

    return {httpGet, httpPost, httpPut, httpDelete}
})();
