# Trivia App

This is a virtual trivia app.

## Deployed App
This App presently only runs locally. Information on running the app locally below.
## Features

1. Display questions - questions can be viewed by category or without any grouping. The difficulty levels of each question is displayed  and answers are hidden by default.
1. Display questions - both all questions and by category. Questions should show the question, category and difficulty rating by default and can show/hide the answer.
2. Delete questions.
3. Add questions and require that they include question and answer text.
4. Search for questions based on a text query string.
5. Play the quiz game, randomizing either all questions or within a specific category.

Completing this trivia app will give you the ability to structure plan, implement, and test an API - skills essential for enabling your future applications to communicate with others.

## API Documentation
The Trivia API has been extensively documented here 
> View the [API README](./backend/README.md) for more details.

## Running Project Locally

* Fork the repository to create a version on your account
* Clone the repository 
```
//locally
git clone https://github.com/<Your Github Username>/trivia-app.git
```


### Backend

The [backend](./backend/README.md) directory contains a Flask and SQLAlchemy server. 

* In your terminal, cd into the backend directory of the trivia-app directory

```
cd trivia-app/backend
```
* Install a virtual environment and activate it
```
pip3 install virtualenv
. venv/bin/activate
```

* Run the requirements.txt script to install all needed dependencies
```
pip install requirements.txt
```

* Run the application
To run the application run the following commands: 
```
export FLASK_APP=flaskr
export FLASK_ENV=development
flask run
```
These commands put the application in development and directs our application to use the `__init__.py` file in our flaskr folder. Working in development mode shows an interactive debugger in the console and restarts the server whenever changes are made. If running locally on Windows, look for the commands in the [Flask documentation](http://flask.pocoo.org/docs/1.0/tutorial/factory/).

The application is run on `http://127.0.0.1:5000/` by default and is a proxy in the frontend configuration. 


<!-- > View the [Backend README](./backend/README.md) for more details. -->


### Frontend

* Install the node packages
```
npm install
```
```
npm start
```

> View the [Frontend README](./frontend/README.md) for more details.
