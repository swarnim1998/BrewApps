# BrewApps
This is a basic Node.js Express server that showcases CRUD operations. It allows you to create, read, update, and delete book data in a simple database.

# Prerequisites
Before you start, make sure you have the following installed:

# Installation Steps
1. Clone this repository to your local machine:
   git clone https://github.com/swarnim1998/BrewApps.git

2. Navigate to the project directory:
   cd BrewApps

3. Install the dependencies:
   npm install

# Usage
1. To start the server, run the following command:
   npm run local
By default, the server is running on http://localhost:3002 you can change the port by changing port in .env file.

# Endpoints
1. Create Book
  URL: http://localhost:3002/api/book
  Method: POST
  Data: JSON object representing the resource
   Ex: {
    "title": "new Moon",
    "author": "raju",
    "summary": "this is my first book"
   }  

2. Update Book(we can update any one field )
  URL: http://localhost:3002/api/book/:id
  Method: PATCH
  Data: JSON object representing the resource
    Ex: {
      "title": "new Moon",
      "author": "raju",
      "summary": "this is my first book"
    } 

3. retrieve books
  URL: http://localhost:3002/api/book
  Method: GET
  Query Parameter: if you want to get data of particular id then pass this
    id: 653fe66da81c30599e86c280
  Response: returns an array of JSON objects

4. delete books
  URL: http://localhost:3002/api/book/:id
  Method: DELETE
  Response: "Data deleted Successfully"
 
          