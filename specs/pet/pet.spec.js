import { assert } from 'chai';
import Ajv from 'ajv';
import {
  addAPet, deletePetById, getPetById, updatePetName,
} from '../../apis/store/pet';

const schema = require('../../schema/pet');

const API_RESPONSE_TIME_SLA = 5000;
const ajv = new Ajv();

describe('Pet test suite :-> manage pet resource', () => {
  it('add a pet to the petstore: happy path', async () => {
    const startTime = new Date().getTime();
    const newPetResponse = await addAPet();
    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);
    const newPetBody = await newPetResponse.json();
    const contentType = newPetResponse.headers.get('content-type');
    // Verify correct HTTP status code
    assert.equal(newPetResponse.status, 200);
    // Verify response payload
    assert.equal(newPetBody.id, 99999);
    // Verify response headers
    assert.isTrue(contentType.includes('application/json'));
    // Validate the schema
    const validate = ajv.compile(schema);
    const isSchemaValid = validate(newPetBody);
    assert.isTrue(isSchemaValid);
  });

  it('find a pet by id: happy path', async () => {
    const startTime = new Date().getTime();
    const petById = await getPetById(99999);
    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);
    const petByIdBody = await petById.json();
    const contentType = petById.headers.get('content-type');
    // Verify correct HTTP status code
    if (!petById.status === 404) {
      assert.equal((petById.status, 200));
    }
    // Verify response payload
    if (!petById.status === 404) {
      assert.equal(petByIdBody.id, 99999);
    }
    // Verify response headers
    assert.isTrue(contentType.includes('application/json'));
  });

  it('find a pet by invalid id : Negative', async () => {
    const startTime = new Date().getTime();
    // invalid Id
    const invalidIdResponse = await getPetById(-10);
    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);
    // Verify correct HTTP status code
    assert.equal(invalidIdResponse.status, 404);
  });

  it('update the petname: happy path', async () => {
    const startTime = new Date().getTime();
    const petName = await updatePetName('Charlie');
    const petNameBody = await petName.json();

    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);

    // Verify correct HTTP status code
    assert.equal(petName.status, 200);

    // Verify the update pet name
    assert.equal(petNameBody.name, 'Charlie');
  });

  it('delete pet by id: happy path', async () => {
    const startTime = new Date().getTime();
    const petById = await getPetById(99999);
    const deletedPet = await deletePetById(99999);
    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);

    // Verify correct HTTP status code
    // run delete only if pet exist:
    if (petById === 200) {
      assert.equal(deletedPet.status, 200);
    }
  });

  it('delete pet by invalid id: negative', async () => {
    const startTime = new Date().getTime();
    const deletedPet = await deletePetById(-11);
    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);

    // Verify correct HTTP status code
    assert.equal(deletedPet.status, 404);
  });
});
