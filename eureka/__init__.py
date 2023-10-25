"""
    __init__.py
    Entry point for the EurekaEats application. See comment after imports for running steps.
"""

import os

from flask import Flask, render_template, request, url_for, redirect
from pymongo import MongoClient

from api.restaurants import restaurant_router

def create_app(test_config=None):# can change nape of "app"
    # 1a. Create application.
    app = Flask(__name__, instance_relative_config=True)
    
    # 1b. Configure application.
    client = MongoClient('localhost', 27017)
    user_db = client.flask_db
    userCOLL = user_db.userCOLL #User Collection
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

    # 2. Put request handlers or blueprints.
    app.register_blueprint(restaurant_router)

    @app.route('/index', methods=('GET', 'POST')) 
    def index():
        if request.method=='POST':
            username = request.form['username']  #Sets variable to whatever -
            newuser = request.form['newuser']    #  -is returned from the "Value" field in radio buttons.
            userCOLL.insert_one({'username': username, 'newuser': newuser}) # Inserts values into Collection object.
            return redirect(url_for('index')) #Refreshes the page
        
        myuser = userCOLL.find_one() #Grabs first item from collection.
        return render_template('index.html', test_message="Hello World!", test_user=myuser)
    return app
