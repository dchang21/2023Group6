"""
    __init__.py
    Entry point for the EurekaEats application. See comment after imports for running steps.
"""

import os
from flask import Flask, render_template, request, url_for, redirect
from pymongo import MongoClient

def create_app(test_config=None):# can change nape of "app"
    app = Flask(__name__, instance_relative_config=True)
    client = MongoClient('localhost', 27017)
    user_db = client.flask_db
    todosTEST = user_db.todosTEST
    # NOTE: The quickstart tutorial implies that this config code to link the database is more for SQLite3 rather than MongoDB. We must replace this with PyMongo.
    app.config.from_mapping(
        SECRET_KEY='dev', #Development key only.
        DATABASE=os.path.join(app.instance_path, 'eurekaeats.mongodb')
        )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/index', methods=('GET', 'POST')) 
    def index():
        return render_template('index.html', test_message="Hello World!")
    return app
