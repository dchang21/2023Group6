"""
    __init__.py
    Entry point for the EurekaEats application. See comment after imports for running steps.
"""

import os
import atexit

from flask import Flask
from pymongo import MongoClient

from eureka.utils.service import DB_SERVICE
from eureka.api.restaurants import restaurant_api_router
from eureka.api.users import user_api_router

def create_app(test_config=None):
    # 1a. Create application.
    app = Flask(__name__, instance_relative_config=True)
    
    # 1b. Configure application.
    # client = MongoClient('localhost', 27017)
    # user_db = client.flask_db
    # userCOLL = user_db.userCOLL #User Collection
    # NOTE: The quickstart tutorial implies that this config code to link the database is more for SQLite3 rather than MongoDB. We must replace this with PyMongo.
    # app.config.from_mapping(
    #     SECRET_KEY='dev', #Development key only.
    #     DATABASE=os.path.join(app.instance_path, 'eurekaeats.mongodb')
    #     )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # 2. Put request handlers or blueprints.
    app.register_blueprint(restaurant_api_router)
    app.register_blueprint(user_api_router)

    return app

def ee_exit_handler():
    DB_SERVICE.close_service()
    print('Closed app MongoDB connection.')

if __name__ != '__main__':
    atexit.register(ee_exit_handler)
