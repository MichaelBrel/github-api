const API_DATA = require('../data/apiData.json');

class Options {

    getOptions(method, url, body) {
        return {
            method: method,
            url: url,
            headers: {
                'Authorization': 'token ' + API_DATA.bearerToken
            },
            body: body,
            json: true
        };
    }
}

module.exports = Options;
