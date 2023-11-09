"""
    @file users.py\n
    Contains API helper functions with call handlers for user actions. Does not include admin action handlers, as they are instead in `admin.py`.\n
    @note The helper functions return 2-tuples as `(payload_code, payload_data)` according to SRD section 3.4, App Data.
    Test command:\n
    ```bash
    curl -X POST -v "http://127.0.0.1:5000/api/users/action" -H "Accept: application/json" -H "Content-Type: application/json" -H "Connection: close" --data "{\"action\": 32, \"args\": null}"
    ```\n
    @author Derek Tan
"""

# from json import loads
from flask import Blueprint, make_response, request

from eureka.api.appcodes import EE_TEST_DUMMY_CALL, EE_CREATE_USER, EE_DELETE_USER, EE_LOGIN_USER, EE_GET_USER_INFO, EE_PAYLOAD_OBJECT, EE_PAYLOAD_BOOLEAN
from eureka.mockdata.fakeusers import MOCK_USER_1

## HELPER FUNCTIONS ##
def user_api_get_user(args: dict = None, db_client = None):
    if args is None:
        return (EE_PAYLOAD_BOOLEAN, False)

    username_arg = args['username']
    # session_cookie_arg = args['ssid']

    # Demo check for user info read operation: for now, just check if the username exists.
    if username_arg == "DoeEats":
        # TODO add PyMongo code to get the user data.
        return (EE_PAYLOAD_OBJECT, MOCK_USER_1)

    return (EE_PAYLOAD_BOOLEAN, False)

def user_api_create_user(args: dict = None, db_client = None):
    # TODO replace stub with similar logic to `user_api_do(...)`.
    return (EE_PAYLOAD_BOOLEAN, False)

def user_api_delete_user(args: dict = None, db_client = None):
    return (EE_PAYLOAD_BOOLEAN, False)

def user_api_login_user(args: dict = None, db_client = None):
    username_arg = args['username']
    email_arg = args['email']
    password_arg = args['password']

    # TODO replace dummy code with PyMongo code that looks for a matching username, password combination in the collection.

    # Do dummy check for a fake user for now!
    if username_arg == MOCK_USER_1['username'] and email_arg == MOCK_USER_1['email'] and password_arg == MOCK_USER_1['password']:
        return (EE_PAYLOAD_BOOLEAN, True)

    return (EE_PAYLOAD_BOOLEAN, False)

def user_api_do(appcode: int = EE_TEST_DUMMY_CALL, args = None):
    """
        This helper function will later contain all logic to interact with the application database for CRUD operations on user data. See SRD section 3.x for more details.\n
        Takes an int action code and a list or dict of arguments if needed.
    """

    pre_result = None

    # TODO Pass a PyMongo instance into the API helper functions. The object should be global scope so it does not get deleted automatically.
    if appcode == EE_GET_USER_INFO:
        pre_result = user_api_get_user(args, None)
    elif appcode == EE_CREATE_USER:
        pre_result = user_api_create_user(args, None)
    elif appcode == EE_DELETE_USER:
        pre_result = user_api_delete_user(args, None)
    elif appcode == EE_LOGIN_USER:
        pre_result = user_api_login_user(args, None)
    else:
        # Default data on invalid code or other errors.
        pre_result = (EE_PAYLOAD_BOOLEAN, False)

    pre_payload_code, pre_data = pre_result

    return {'payload': pre_payload_code, 'data': pre_data}

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
        json_reply = make_response(user_api_do(json_request['action'], json_request['args']), 200)
        json_reply.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        json_reply.headers.add('Access-Control-Allow-Methods', 'GET, POST')
        json_reply.headers.add('Access-Control-Allow-Headers', 'Accept, Content-Type')
        json_reply.content_type = 'application/json'
    else:
        json_reply = make_response('foo', 204)
        json_reply.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        json_reply.headers.add('Access-Control-Allow-Methods', 'GET, POST')
        json_reply.headers.add('Access-Control-Allow-Headers', 'Accept, Content-Type')
        json_reply.content_type = 'text/plain'

    return json_reply
