const Content = require("../api-client/Content");
let content = new Content();
const API_DATA = require('../data/apiData.json');

const testRepo = API_DATA.testRepo;
const fileName = 'createNewFile';

describe('Delete a file', function () {
    const message = 'fileIsDeleted';
  
    beforeEach(async function () {
      const message = "forDeleteFileTest";
      const fileContent = "forDeleteFileTest";
      response = await content.createFile(fileName, message, fileContent, testRepo);
    });
  
    it('File should be deleted and status code should be 200', async function () {
      response = await content.deleteFile(fileName, message, testRepo);
      expect(response.statusCode).toEqual(200);
    })
  
  })
