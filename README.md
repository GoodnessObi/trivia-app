# Trivia App

This is a virtual trivia app.

## Deployed App
This App presently only runs locally. Information on running the app locally below.
## Features

1. Display questions - questions can be viewed by category or without any grouping. The difficulty level of each question is displayed and answers are hidden by default.
2. Display questions - both all questions and by category. Questions show the question, category and difficulty rating by default and can show/hide the answer.
3. Delete questions.
4. Add questions. This requires that the answer, difficulty level and catgeory are included.
5. Search for questions.
6. Play the quiz game, randomizing either all questions or within a specific category.

## Running Project Locally

* Fork the repository to create a version on your account
* Clone the repository 
```
//locally
git clone https://github.com/<Your Github Username>/trivia-app.git
```

### Frontend

The frontend is run on [http://127.0.0.1:3000](http://127.0.0.1:3000) by default

> View the [Frontend README](./frontend/README.md) for more details.

### Backend

The [backend](./backend) directory contains a Flask and SQLAlchemy server. 

* In your terminal, cd into the backend directory of the trivia-app directory

```
cd trivia-app/backend
```
* Install a virtual environment and activate it
```
python3 -m venv venv
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


> View the [Backend README](./backend/README.md) for more details.

## API Documentation
The Trivia API is organized around REST. It has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes and verbs.

### Base URL
The application presently runs only locally on: 
```
http://127.0.0.1:5000/
```

### Error
**HTTP Status Code Summary**
| Code | Message            | Summary                                                                                       |
|------|--------------------|-----------------------------------------------------------------------------------------------|
| 200  | ok                 | Everything worked as expected.                                                                |
| 400  | bad request        | The request was unacceptable, often due to missing required parameter.                        |
| 404  | resource not found | The requested resource doesn't exist.                                                         |
| 405  | method not allowed | The request method is not supported                                                           |
| 422  | uprocessable       | The request entity was correct but the server was unable to process the contained information |

**Sample Request**
```json
{
  "error": 404,
  "message": "resource not found",
  "success": false
}
```

### Endpoints

`GET '/categories'`

- Fetches a dictionary of categories in which the keys are the ids and the value is the corresponding string of the category
- Request Arguments: None

**Sample Request**
```
curl http://127.0.0.1:5000/categories
```

- Returns: An object with a single key, `categories`, that contains an object of `id: category_string` key: value pairs.

```json
{
  "categories": {
    "1": "Science",
    "2": "Art",
    "3": "Geography",
    "4": "History",
    "5": "Entertainment",
    "6": "Sports"
  },
  "success": true
}
```

---
`GET '/questions?page=${integer}'`

- Fetches a paginated set of questions, a total number of questions, all categories and current category string.
- Request Arguments: `page` - integer

**Sample Request**
```
curl http://127.0.0.1:5000/questions?page=1
```

- Returns: An object with 10 paginated questions, total questions, object including all categories, and current category string

```json
{
  "questions": [
    {
      "id": 1,
      "question": "This is a question",
      "answer": "This is an answer",
      "difficulty": 5,
      "category": 2
    }
  ],
  "totalQuestions": 100,
  "categories": {
    "1": "Science",
    "2": "Art",
    "3": "Geography",
    "4": "History",
    "5": "Entertainment",
    "6": "Sports"
  },
  "currentCategory": "History"
}
```

---
`GET '/categories/${id}/questions'`

- Fetches questions for a cateogry specified by id request argument
- Request Arguments: `id` - integer

**Sample Request**
```
curl http://127.0.0.1:5000/categories/1/questions
```

- Returns: An object with questions for the specified category, total questions, and current category string


```json
{
  "current_category": "Science",
  "questions": [
    {
      "answer": "The Liver",
      "category": 1,
      "difficulty": 4,
      "id": 20,
      "question": "What is the heaviest organ in the human body?"
    },
    {
      "answer": "Alexander Fleming",
      "category": 1,
      "difficulty": 3,
      "id": 21,
      "question": "Who discovered penicillin?"
    },
    {
      "answer": "Blood",
      "category": 1,
      "difficulty": 4,
      "id": 22,
      "question": "Hematology is a branch of medicine involving the study of what?"
    }
  ],
  "success": true,
  "total_questions": 3
}
```

---

`DELETE '/questions/${id}'`

- Deletes a specified question using the id of the question
- Request Arguments: `id` - integer

**Sample Request**
```
curl -X DELETE http://127.0.0.1:5000/questions/4
```

- Returns: An object with the id of the deleted question, total questions and 10 paginated questions.

```json
{
  "deleted": 4,
  "questions": [
    {
      "answer": "Apollo 13",
      "category": 5,
      "difficulty": 4,
      "id": 2,
      "question": "What movie earned Tom Hanks his third straight Oscar nomination, in 1996?"
    },
    {
      "answer": "Maya Angelou",
      "category": 4,
      "difficulty": 2,
      "id": 5,
      "question": "Whose autobiography is entitled 'I Know Why the Caged Bird Sings'?"
    },
    {
      "answer": "Brazil",
      "category": 6,
      "difficulty": 3,
      "id": 10,
      "question": "Which is the only team to play in every soccer World Cup tournament?"
    }
  ],
  "success": true,
  "total_questions": 15
}
```

---

`POST '/quizzes'`

- Sends a post request in order to get the next question
- Request Body:

```json
{
  "previous_questions": [1, 4, 20, 15],
  "quiz_category": {
    "type": "Science",
    "id": 1
  },
  "success": true
}
```

**Sample Request**
This will return random questions in Science category.
```
curl -X POST -H "Content-Type: application/json" \
  -d '{"previous_questions":[], "quiz_category":{"type": "Science", "id": 1}}' \
  http://127.0.0.1:5000/quizzes
```

- Returns: a single new question object

```json
{
  "question": {
    "answer": "Alexander Fleming",
    "category": 1,
    "difficulty": 3,
    "id": 21,
    "question": "Who discovered penicillin?"
  },
  "success": true
}
```

---

`POST '/questions'`

- Sends a post request in order to add a new question
- Request Body:

```json
{
  "question": "Heres a new question string",
  "answer": "Heres a new answer string",
  "difficulty": 1,
  "category": 3
}
```

**Sample Request**
This will return random questions in Science category.
```
curl -X POST -H "Content-Type: application/json" \
  -d '{"questions":"Heres a new question string", "answer": "Heres a new answer string", "difficulty": 1,"category": 3}' \
  http://127.0.0.1:5000/questions
```

- Returns: An object with the id of the created question, total questions and 10 paginated questions.

```json
{
  "created": 25,
  "questions": [
    {
      "answer": "Apollo 13",
      "category": 5,
      "difficulty": 4,
      "id": 2,
      "question": "What movie earned Tom Hanks his third straight Oscar nomination, in 1996?"
    },
    {
      "answer": "Maya Angelou",
      "category": 4,
      "difficulty": 2,
      "id": 5,
      "question": "Whose autobiography is entitled 'I Know Why the Caged Bird Sings'?"
    },
    {
      "answer": "One",
      "category": 2,
      "difficulty": 4,
      "id": 18,
      "question": "How many paintings did Van Gogh sell in his lifetime?"
    }
  ],
  "success": true,
  "total_questions": 16
}
````

---

`POST '/questions'`

- Sends a post request in order to search for a specific question by search term
- Request Body:

```json
{
  "searchTerm": "this is the term the user is looking for"
}
```
**Sample Request**
```
curl -X POST -H "Content-Type: application/json" \
  -d '{"searchTerm": "largest lake"}' \
  http://127.0.0.1:5000/questions/search
```

- Returns: any array of questions, a number of totalQuestions that met the search term and the current category string

```json
{
  "current_category": "History",
  "questions": [
    {
      "answer": "Lake Victoria",
      "category": 3,
      "difficulty": 2,
      "id": 13,
      "question": "What is the largest lake in Africa?"
    }
  ],
  "success": true,
  "total_questions": 1
}
```
> View the [API README](./backend/README.md) for more details.

## Testing
> View the [Backend README](./backend/README.md) for more details.


## Local Development
Information on setting up a database with a default user and populating the database with data is available on the [Backend README](./backend/README.md)
