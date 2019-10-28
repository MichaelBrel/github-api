const Content = require("../api-client/Content");
let content = new Content();
const API_DATA = require('../data/apiData.json');

const testRepo = API_DATA.testRepo;
const fileName = 'createNewFile';

describe('Create new file', function () {

  const message = 'create new file';
  const fileContent = 'new file';

  afterEach(async function () {
    const message = "forCreateFileTest";
    response = await content.deleteFile(fileName, message, testRepo);
  });

  it('New file should be created and status code should be 201', async function () {
    response = await content.createFile(fileName, message, fileContent, testRepo);
    expect(response.statusCode).toEqual(201);
  })

})
