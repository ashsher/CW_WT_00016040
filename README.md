About App Weblication
This web application represents the Car Seller Company which helps different kinds of people from various locations to sell their cars easily and without any difficulties. The given web application has two separate pages, including the page where certain person registers his/her car following all the required places to fill out. Also, there is another page where all the cars to be sold are displayed with the necessary information for the potential customers.

Step by step instruction to run app
To run the web application locally, the first thing to do is installation of dependencies for the project. Foremost, there should be external modules of Node.js to support the web application. To install them, terminal should be open (Ctrl + `) and “npm i” typed, which will trigger the installation of node_modules. Next, web application requires the following dependencies: body-parser, express, express-validator, nodemon and pug. To download them, again opening terminal and “npm body-parser express express-validator nodemon pug” should be typed. The final step before running the application, there should be the following text "app": "nodemon index.js" must be added inside the “scripts” section in the package.json. This was done to ensure that when the program will be running the main index.js file will be compiled. After all, in the terminal “npm run app” command will run the whole project. It should output the text that project successfully worked. Finally, in the browser “http://localhost:3000/user/register” should be written to see and utilize the Car Selling web application.

Dependencies 
The given web application has the following list of dependencies: body-parser, express, express-validator, nodemon  and pug.
Body-parser is used to parse the incoming request bodies in a Node.js application. It extracts the entire body section of an incoming request stream and exposes it on req.body. It is used to parse the data from .JSON. 
Express is the widely used framework of Node.js. It simplifies the process of handling HTTP requests and responses, routing, middleware management, and other parts in the project.
Express-validator is used for request validation in the Car Selling application. It provides a set of chainable validators and sanitizers to validate request data from inputs, query parameters before including them in the project.
Nodemon monitors for changes in web application files and automatically restarts the server when changes are detected. It was used to speed up the development process by eliminating the need to manually restart the server every time changes are made to the code.
Pug was used to adjust the front-end part of the project instead of HTML, because pug is known as common template for Node.js browsers.

Links
Link to public repository on GitHub: 
Link to the hosted application:

