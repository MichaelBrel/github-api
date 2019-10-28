let request = require('got');
const API_DATA = require('../data/apiData.json');
const Options = require('../util/Options');
let options = new Options();

class Content {

    getFile(filename, repository) {
        const requestOptions = options.getOptions('GET', API_DATA.baseUrl + "/repos/" + API_DATA.gitOwnerName + "/" + repository + "/contents/" + filename);
        return request(requestOptions);
    }

    createFile(filename, message, content, repository) {
        let body = {
            'message': message,
            'content': Buffer.from(content).toString('base64')
        }
        const requestOptions = options.getOptions('PUT', API_DATA.baseUrl + "/repos/" + API_DATA.gitOwnerName + "/" + repository + "/contents/" + filename, body);
        return request(requestOptions);
    }

    async deleteFile(filename, message, repository) {
        let body = {
            'message': message,
            'sha': await this.getFileSha(filename, repository)
        }
        const requestOptions = options.getOptions('DELETE', API_DATA.baseUrl + "/repos/" + API_DATA.gitOwnerName + "/" + repository + "/contents/" + filename, body);
        return request(requestOptions);
    }

    async getFileSha(filename, repository) {
        let response = await this.getFile(filename, repository);
        return response.body.sha;
    }

}

module.exports = Content;
