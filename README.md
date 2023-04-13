# Back End E-commerce 

## Description
- A back end for my e-commerce website that uses the latest technologies

- GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database


## Table of Contents
- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)
- [Mock-Up](#mock-up)


## Installation
- User should clone this repository from GitHub.
- Create an .env file with your username and password.
- Connect to the database by typing mysql -u root -p, into the terminal 
and enter your password from the .env file(the database name is ecommerce_db). 
- Run DROP DATABASE ecommerce_db; then run 
  CREATE DATABASE ecommerce_db;
- Go to project folder/ Join develop folder (cd develop)
- Run nmp run seed to seed the file.
- Start the application by running nmp start.
- Then go to insomnia to test the codes.


## License

Please refer to the LICENSE in the repo.

## Tests
None.

## Contributing
None.

## Questions
If you have any questions about the repo, open an issue or contact me directly at carineeffoua@gmail.com and you can find more of my work at [https://github.com/aeffoua].

## Mock-Up

- https://watch.screencastify.com/v/OMd7EnrX4g7LfYhHfFhV

- https://drive.google.com/file/d/1CqPWxbrBeHqySfwTRyfykTQHz0t-I6gt/view






https://user-images.githubusercontent.com/119564199/231816860-b0d84d48-e6f0-4caa-9866-40d524918236.mov



