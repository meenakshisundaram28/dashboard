## note 

please make your system installed angular 19 and related node version in application

# Dashboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Development server

To start a local development server, run:


ng serve

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## api calls

i used json server for api calls to start the json server json-server --watch db.json --port 3000 you need to use the command to another terminal


## authentication

  this application role authentication implemented here ,only three role allowed used certain email that are admin@gmail.com,user@gmail.com,guest@gmail.com. if any other email used permission denied error showed 

# time stamp

user login time will be showed in dashboard header


## Building

To build the project run:


ng build


This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:


ng test

