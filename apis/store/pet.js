/* eslint-disable linebreak-style */
import fetch from 'node-fetch';
import { BASE_URL, getHeaders } from '../../lib/auth';
import { petPayload, updatedPetNamePayload } from '../../data/petPayload';

const petUrl = `${BASE_URL}/pet`;

export const getPetById = async (petId) => {
  const response = await fetch(`${petUrl}/${petId}`, {
    method: 'GET',
    headers: await getHeaders(),
  })
    .then((resp) => resp)
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const addAPet = async () => {
  console.log(`URL: ${petUrl}`);
  const response = await fetch(petUrl, {
    method: 'post',
    headers: await getHeaders(),
    body: JSON.stringify(petPayload),
  })
    .then((resp) => resp)
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const updatePetName = async (name) => {
  const response = await fetch(petUrl, {
    method: 'put',
    headers: await getHeaders(),
    body: JSON.stringify(await updatedPetNamePayload(name)),
  })
    .then((resp) => resp)
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const deletePetById = async (petId) => {
  const response = await fetch(`${petUrl}/${petId}`, {
    method: 'delete',
    headers: await getHeaders(),
  })
    .then((resp) => resp)
    .catch((error) => {
      console.log(error);
    });
  return response;
};
