class Request {

    constructor(props) {
        this.loading = new CustomEvent("loading", {
            "detail": "Start request"
        });
        this.ended = new CustomEvent("ended", {
            "detail": "Finish Request"
        });
    }

    postJSON(url, data) {
        return new Promise(function(resolve, reject) {
            fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': "Bearer "+window.localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'access-method': 'api-json'
                },
                credentials: 'same-origin',
                method: "POST",
                body: JSON.stringify(data)
            }).then(function(response) {
                response.json().then(function(res) {
                    resolve(res);
                }).catch(function(res) {
                    reject(res);
                });
            }).catch(function(err) {
            });
        });
    }

    deleteJSON(url, data) {
        return new Promise(function(resolve, reject) {
            fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': "Bearer "+window.localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'access-method': 'api-json'
                },
                credentials: 'same-origin',
                method: "DELETE",
                body: JSON.stringify(data)
            }).then(function(response) {
                response.json().then(function(res) {
                    resolve(res);
                }).catch(function(res) {
                    reject(res);
                });
            }).catch(function(err) {
            });
        });
    }

    putJSON(url, data) {
        return new Promise(function(resolve, reject) {
            fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': "Bearer "+window.localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'access-method': 'api-json'
                },
                credentials: 'same-origin',
                method: "PUT",
                body: JSON.stringify(data)
            }).then(function(response) {
                response.json().then(function(res) {
                    resolve(res);
                }).catch(function(res) {
                    reject(res);
                });
            }).catch(function(err) {
            });
        });
    }

    getJSON(url) {
        var me = this;
        document.dispatchEvent(this.loading);
        return new Promise(function(resolve, reject) {
            fetch(url, {
                headers: {
                    'Authorization': "Bearer "+window.localStorage.getItem('token'),
                   'access-method': 'api-json'
                },
                credentials: "same-origin"
            }).then(function(response) {
                response.json().then(function(res) {
                    document.dispatchEvent(me.ended);
                    resolve(res);
                }).catch(function(res) {
                    document.dispatchEvent(me.ended);
                    reject(res);
                });
            });
        });
    }

    upload(url, file) {
        var me = this;
        document.dispatchEvent(this.loading);
        return new Promise(function(resolve, reject) {
            var data = new FormData();
            data.append('file', file)
            data.append('username', window.localStorage.getItem('username'));

            fetch(url, {
                method: 'POST',
                body: data,
                headers: {
                    'Authorization': "Bearer "+window.localStorage.getItem('token'),
                    'access-method': 'api-json'
                },
                credentials: "same-origin"
            }).then(function(response) {
                response.json().then(function(res) {
                    document.dispatchEvent(me.ended);
                    resolve(res);
                }).catch(function(res) {
                    document.dispatchEvent(me.ended);
                    reject(res);
                });
            });
        })
    }

    basicGet(url) {
        var me = this;
        document.dispatchEvent(this.loading);
        return new Promise(function(resolve, reject) {
            fetch(url, {
                method: 'GET'
            }).then(function(response) {
                response.json().then(function(res) {
                    document.dispatchEvent(me.ended);
                    resolve(res);
                }).catch(function(res) {
                    document.dispatchEvent(me.ended);
                    reject(res);
                });
            });
        });
    }
}

module.exports = new Request();