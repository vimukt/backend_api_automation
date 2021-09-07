backend_api_automation :

This code repository contains API tests for petstore v2 (https://petstore.swagger.io/v2/swagger.json)

This is a sample API testing project which will test the following requests:

Pet resource: 

1. Add a new pet to the store
Method : POST
​/pet

2. Find a pet by ID
Method : GET
​/pet​/{petId}

3. Update a pet name (existing pet {petId})
Method : PUT
​/pet​

4. Delete a pet
Method : DELETE
​​/pet​/{petId}


Here is checklist of assertion/validation performed in the tests:
  1. Verify basic performance sanity/Response time SLA (is 5 sec.)  
  2. Verify correct HTTP status code
  3. Verify response payload
  4. Verify response headers
  5. Validate the schema
  6. Happy Path/Negative Scenarios
 
Dependencies:

Make sure you have node 12+, I have (node -v = v14.17.0) and npm installed.
JDK8+ installed.

Note: 
Run and tested on MacOS Big Sur (Version 11.4)
ESLINT is installed and configured.
Pre-commit hook is used in this project to make sure non linted code is not allowed to commit.
run : `npm run lint` command to make code is in proper format.


Running Tests:
 1. Checkout the code from repo.

 2. Navigate to project directory : <HOME/CLONEPATH>/<backend_api_automation> . 

 3. run on command line/bash  : `npm install`

 4. once all the dependencies are installed run `npm run test`

 Note : 
 Make sure .env & .babelrc is not missing 
 Incase of Windows OS please update the "_mocha" path correctly in the script section of package.json
 example :
 "test": "node .\\node_modules\\mocha\\bin\\_mocha --require @babel/register ./specs/**/*.spec.js   --timeout 99999999"
