// eslint-disable-next-line import/prefer-default-export
export const petPayload = {
    "id": 99999,
    "category": {
      "id": 0,
      "name": "Pug"
    },
    "name": "Doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "tag"
      }
    ],
    "status": "available"
  };

  export let updatedPetNamePayload = async (petName) => {
    
let payload = {
    "id": 1,
    "category": {
      "id": 0,
      "name": "pug"
    },
    "name": petName,
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "tag"
      }
    ],
    "status": "available"
   }
   return  payload; 
  };
