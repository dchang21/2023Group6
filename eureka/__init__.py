"""
VIA https://flask.palletsprojects.com/en/3.0.x/tutorial/factory/
$ flask --app eureka run
http://127.0.0.1:5000/hello
"/hello" comes from our route. @app.route('/hello')
"""
import os
from flask import Flask

def create_app(test_config=None):# can change nape of "app"
    app = Flask(__name__, instance_relative_config=True)
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

    @app.route('/hello') 
    def hello():
        return 'Eureka!'
    
    return app