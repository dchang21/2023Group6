"""
    @file users.py\n
    Contains API call handlers for user actions. Does not include admin action handlers, as they are instead in `admin.py`.\n
    Test command:\n
    ```bash
    curl -X POST -v "http://127.0.0.1:5000/api/users/action" -H "Accept: application/json" -H "Content-Type: application/json" -H "Connection: close" --data "{\"action\": 32, \"args\": null}"
    ```\n
    @author Derek Tan
"""

# from json import loads
from flask import Blueprint, make_response, request

from eureka.api.appcodes import EE_TEST_DUMMY_CALL, EE_GET_USER_INFO, EE_PAYLOAD_NUMBER, EE_PAYLOAD_STRING, EE_PAYLOAD_OBJECT, EE_PAYLOAD_BOOLEAN
from eureka.mockdata.fakeusers import MOCK_USER_1

## HELPER FUNCTIONS ##
def user_api_do(appcode: int=EE_TEST_DUMMY_CALL, args=None):
    """
        This helper function will later contain all logic to interact with the application database for CRUD operations on user data. See SRD section 3.x for more details.\n
        Takes an int action code and a list or dict of arguments if needed.
    """
    # TODO: replace dummy logic with more code to fetch DB items and generate data objects (They are auto-returned from route functions as JSON).
    if appcode == EE_GET_USER_INFO:
        return {'payload': EE_PAYLOAD_OBJECT, 'data': MOCK_USER_1}

    return {'payload': EE_PAYLOAD_BOOLEAN, 'data': False}

## USER API BLUEPRINT ##
user_api_router = Blueprint('user_router', __name__)

@user_api_router.route('/api/users/action', methods=['GET', 'POST', 'OPTIONS'])
def handle_user_action():
    json_request = None
    json_reply = None
    api_call_method = request.method

    # 1. Get request JSON if present.
    if request.is_json:
        json_request = request.get_json()

    # 2. Handle request by method.
    if api_call_method == 'GET' or api_call_method == 'POST':
        json_reply = make_response(user_api_do(json_request['action'], None), 200)
        json_reply.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        json_reply.headers.add('Access-Control-Allow-Methods', 'GET, POST')
        json_reply.headers.add('Access-Control-Allow-Headers', 'Accept, Content-Type')
        json_reply.content_type = 'application/json'
    else:
        json_reply = make_response('foo', 200)
        json_reply.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        json_reply.headers.add('Access-Control-Allow-Methods', 'POST')
        json_reply.headers.add('Access-Control-Allow-Headers', 'Accept, Content-Type')
        json_reply.content_type = 'text/plain'

    return json_reply
