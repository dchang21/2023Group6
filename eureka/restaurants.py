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
    reply = make_response({"msg": 'Hello World!'}, 200)

    reply.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000') # NOTE: Permits the frontend app at this spot to request the API for development only. Should fix CORS errors?
    reply.headers.add('Access-Control-Allow-Methods', 'GET') # NOTE: Allows GET requests from React AJAX for now.
    reply.headers.add('Access-Control-Allow-Headers', 'Accept, Authorization') # NOTE: Allows these headers from React frontend to satisfy CORS checks.
    reply.content_type = 'application/json' # Tell the client we're sending JSON.

    return reply
