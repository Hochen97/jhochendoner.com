# jhochendoner.com — A portfolio website by Jacob Hochendoner

1. Installation Instructions
    1. Install Node.js & NPM from `https://nodejs.org/en/`.
    2. Clone the repository.
    3. cd into the directory and run `npm install`.
    4. install nodemon globally by running `npm i -g nodemon` (For development purposes).
    5. install PM2 for node application management using `npm i -g pm2`.
2. Run instructions
    1. Development
        1. run the application from the directory using `nodemon .`.
    2. Production
        1. run the application on the desired server using the command `pm2 start $projectDir/bin/www --name jhochendoner.com`.