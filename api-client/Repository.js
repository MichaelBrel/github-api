let request = require('got');
const API_DATA = require('../data/apiData.json');
const Options = require('../util/Options');
let options = new Options();

class Repository {

  async createRepository(repositoryName) {
    let body = {
      'name': repositoryName
    };
    const requestOptions = options.getOptions('POST', API_DATA.repoUrl, body);
    return request(requestOptions);
  }

  async getAllRepositories() {
    const requestOptions = options.getOptions('GET', API_DATA.repoUrl);
    return request(requestOptions);
  }

  async deleteRepository(repositoryName) {
    const requestOptions = options.getOptions('DELETE', API_DATA.baseUrl + API_DATA.deleteRepositoryEndpoint + repositoryName);
    return request(requestOptions);
  }

}

module.exports = Repository;
