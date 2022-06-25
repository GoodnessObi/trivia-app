import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from flaskr import create_app
from models import setup_db, Question, Category


class TriviaTestCase(unittest.TestCase):
    """This class represents the trivia test case"""

    def setUp(self):
        """Define test variables and initialize app."""
        self.app = create_app()
        self.client = self.app.test_client
        self.database_name = "trivia_test"
        self.database_path = "postgres://{}/{}".format(
            "localhost:5432", self.database_name
        )
        setup_db(self.app, self.database_path)

        self.new_question = {
            "question": "What is the reason",
            "answer": "Neil Gaiman",
            "category": "5",
            "difficulty": 2,
        }

        self.search_term = {"searchTerm": "What is the reason"}

        # binds the app to the current context
        with self.app.app_context():
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            # create all tables categ
            self.db.create_all()

    def tearDown(self):
        """Executed after reach test"""
        pass

    """
    TODO
    Write at least one test for each test for successful operation and for expected errors.
    """
    # get paginated questions
    def test_get_paginated_questions(self):
        res = self.client().get("/questions")
        data = json.loads(res.data)
        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertTrue(len(data["questions"]))
        self.assertTrue(data["total_questions"])
        self.assertTrue(len(data["categories"]))
        self.assertEqual(data["current_category"], None)

    def test_404_sent_requesting_beyond_valid_page(self):
        res = self.client().get(
            "/questions?page=1000",
            json={
                "question": "new question",
                "answer": "test",
                "category": "5",
                "difficulty": 1,
            },
        )
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data["success"], False)
        self.assertEqual(data["message"], "resource not found")

    # get paginated questions based on categories
    def test_get_paginated_questions_from_category(self):
        res = self.client().get("/categories/5/questions")
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertTrue(len(data["questions"]))
        self.assertTrue(data["total_questions"])
        self.assertTrue(data["current_category"])

    def test_404_sent_requesting_beyond_valid_page(self):
        res = self.client().get(
            "/categories/5/questions?page=1000",
            json={
                "question": "new question",
                "answer": "test",
                "category": "2",
                "difficulty": 1,
            },
        )
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data["success"], False)
        self.assertEqual(data["message"], "resource not found")

    # delete question
    # def test_delete_question(self):
    #     res = self.client().delete("/questions/8")
    #     data = json.loads(res.data)

    #     question = Question.query.filter(Question.id == 8).one_or_none()

    #     self.assertEqual(res.status_code, 200)
    #     self.assertEqual(data["success"], True)
    #     self.assertEqual(data["deleted"], 8)
    #     self.assertTrue(data["total_questions"])
    #     self.assertTrue(len(data["questions"]))
    #     self.assertEqual(question, None)

    # def test_404_if_question_does_not_exist(self):
    #     res = self.client().delete("/questions/1000")
    #     data = json.loads(res.data)

    #     self.assertEqual(res.status_code, 422)
    #     self.assertEqual(data["success"], False)
    #     self.assertEqual(data["message"], "unprocessable")

    # create new question
    def test_create_new_question(self):
        res = self.client().post("/questions", json=self.new_question)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertTrue(data["created"])
        self.assertTrue(len(data["questions"]))

    def test_405_if_question_creation_not_allowed(self):
        res = self.client().post("/questions/45", json=self.new_question)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 405)
        self.assertEqual(data["success"], False)
        self.assertEqual(data["message"], "method not allowed")

    # get results for search questions
    def test_search_questions(self):
        res = self.client().post("/questions/search", json=self.search_term)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertTrue(len(data["questions"]))
        self.assertTrue(data["total_questions"])
        self.assertEqual(data["current_category"], None)

    # error handling
    def test_create_new_question(self):
        res = self.client().post("/questions", json=self.new_question)
        data = json.loads(res.data)
        pass

    def test_422_if_question_creation_fails(self):
        res = self.client().post("/questions", json=self.new_question)
        data = json.loads(res.data)
        pass


# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()
