"""
    @file restaurants.py\n
    @summary Contains a Flask blueprint to handle EurekaEats API calls from the React frontend.\n
    @note See SRD 3.4 for our EurekaEats API message format.
    @author Derek Tan
"""

from json import loads

from flask import Blueprint, make_response, request

restaurant_router = Blueprint('restaurant_api', __name__)

@restaurant_router.route('/api/dummy', methods=['OPTIONS', 'GET', 'POST'])
def send_dummy_message():
    """
        This is a function to return a simple JSON response to the React client to test if the frontend is properly connected. GET requests are to get JSON back from the server. POST requests are to send JSON to the server to process.
    """
    json_reply = None
    api_call_method = request.method
    
    # GET requests for EurekaEats API are for sending data TO the server.
    if api_call_method == 'GET':
        json_reply = make_response({'payload': 1, 'data': 'Hello world!'}, 200)
        json_reply.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000') # NOTE: Permits the frontend app at this spot to request the API for development only. Should fix CORS errors?
        json_reply.headers.add('Access-Control-Allow-Methods', 'GET') # NOTE: Allows GET requests from React AJAX for now.
        json_reply.headers.add('Access-Control-Allow-Headers', 'Accept, Content-Type') # NOTE: Allows these headers from React frontend to satisfy CORS checks.
        json_reply.content_type = 'application/json' # Tell the client we're sending JSON.

    elif api_call_method == 'POST':
        json_reply = make_response({'payload': 1, 'data': 'Hello World 2!'}, 200)

        json_reply.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        json_reply.headers.add('Access-Control-Allow-Methods', 'POST')
        json_reply.headers.add('Access-Control-Allow-Headers', 'Accept, Content-Type')
        json_reply.content_type = 'application/json'
    else:
        json_reply = make_response('Looks good!', 200)
        json_reply.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        json_reply.headers.add('Access-Control-Allow-Methods', 'POST')
        json_reply.headers.add('Access-Control-Allow-Headers', 'Accept, Content-Type')
        json_reply.content_type = 'text/plain'

    return json_reply
