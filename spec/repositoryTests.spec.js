const Repository = require("../api-client/Repository");
let repository = new Repository();
const API_DATA = require('../data/apiData.json');

describe('List repositories', function () {
  const firstRepositoryName = API_DATA.testRepo;

  it('First repository name should match given repository name', async function () {
    response = await repository.getAllRepositories();
    expect(response.body[0].name).toEqual(firstRepositoryName);
  })

})

describe('Create repositories', function () {
  const postRepositoryName = 'repository-test';

  afterEach(async function () {
    response = await repository.deleteRepository(postRepositoryName);
  });

  it('New repository should be created and status code should be 201', async function () {
    response = await repository.createRepository(postRepositoryName);
    expect(response.statusCode).toEqual(201);
  })

})

describe('Delete repositories', function () {
  const postRepositoryName = 'repository-test';

  beforeEach(async function () {
    response = await repository.createRepository(postRepositoryName);
  });

  it('Repository should be deleted and status code should be 204', async function () {
    response = await repository.deleteRepository(postRepositoryName);
    expect(response.statusCode).toEqual(204);
  })

})
