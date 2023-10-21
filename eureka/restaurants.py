"""
    @file restaurants.py\n
    @summary Contains a Flask blueprint to handle EurekaEats API calls from the React frontend.\n
    @author Derek Tan
"""

from json import loads, dumps

from flask import Blueprint, make_response

restaurant_router = Blueprint('restaurant_api', __name__)

@restaurant_router.route('/api/dummy', methods=['GET'])
def send_dummy_message():
    """
        This is a function to return a simple JSON response to the React client to test if the frontend is properly connected.
    """
    dummy_response = make_response(dumps({"msg": 'Hello World!'}), 200)

    dummy_response.headers['Content-Type'] = 'application/json'

    return dummy_response
