# README

## Project:
 - Course: CS 3337 Fall 2023
 - Title: "EurekaEats"
 - Slogan: "Sometimes, fast food won't cut it- People gotta eat _good_."
 - Developers: Devin Chang, Iqra Irfan, Dana Mendoza, David Tabor, Derek Tan

## 1. Brief
This is Group 6's project for the CS 3337 Fall 2023 course. In a nutshell, this project is an enhanced application based on Yelp. It offers better features to help its users choose best-fitting dining options and other quality of life features.

## 2. Further Info

### 2.1 Issue Posting
Please check the _Projects_ tab for an overview of development. If a new work item is needed, please add an "issue" to _Issues_ before we accept it into _Projects_.

### 2.2 Development Usage

#### 2.2.1 Running Steps:
 1. See https://flask.palletsprojects.com/en/3.0.x/tutorial/fact for a quick overview.
 2. $ flask --app eureka run
 3. Go to `http://127.0.0.1:5000/index` to see the demo page.
    ```python
        # This code sets a path that the app knows. The path comes after the IP and port in the URL.
        @app.route('/home')
        def home():
            return 'Eureka!'
    ```

#### 2.2.2 Misc. Tips:
 - The `config.py` file has been added to the repo for easy access, but it is still unsafe to put custom secret strings in the settings. Please use a `.env` file on your computer instead for database login info.
