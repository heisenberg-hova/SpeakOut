SpeakOut System

Name: Alex Weru Ndirangu
Reg. No: J31/3702/2020
Supervisor: Mr. Alfred Karwega
Academic Year: 2023/2024
System Title: SpeakOut - An Online Web Application for Online Mental Health Support.

## Technologies used
Frontend - HTML, CSS\
Backend - Node.js, JavaScript, jQuery, Ajax,  MongoDB Altlas,  Git 
Node.js Modules - Nodemon, Express.js, Express-session, Path, Mongoose, Multer, Http, Socket.io, Nodemailer, Bcrypt

## How to Run the project

1. Install:
- VSCode at https://code.visualstudio.com/download
- Git at https://git-scm.com/downloads
- Node.js at https://nodejs.org/en/download/

2. Open the project with VSCode, open the IDE's terminal and run the command `npm install` 

3. Connect the project to the database:
- Create a MongoDB Atlas account at https://mongodb.com
- Connect your project to the MongoDB Cluster by clicking on the "connect" button, choosing the "connect to your application" option and copying the link.
- Inside the .env file, make a new variable called `DATABASE_URL` and assign it (=) to the link you copied from MongoDB, making sure to replace the 'username' and 'password' fields in the url to your database access credentials. 
- Full MongoDB setup tutorial at https://www.youtube.com/watch?v=2QQGWYe7IDU&ab_channel=TraversyMedia

5. Run the project by typing "npm run devStart" and going to http://localhost:8000/ on your browser.