"""
    @file users.py\n
    Contains API call handlers for user actions. Does not include admin action handlers, as they are instead in `admin.py`.\n
    @author Derek Tan
"""

# from json import loads
from flask import Blueprint, make_response, request

from appcodes import EE_PAYLOAD_NUMBER, EE_PAYLOAD_STRING, EE_PAYLOAD_OBJECT, EE_PAYLOAD_BOOLEAN

user_api_router = Blueprint('user_router', __name__)

@user_api_router.route('/api/users/action')
def handle_user_action():
    json_reply = None
    api_call_method = request.method

    if api_call_method == 'GET' or api_call_method == 'POST':
        json_reply = make_response({'payload': EE_PAYLOAD_STRING, 'data': 'Hello world!'}, 200)
        json_reply.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        json_reply.headers.add('Access-Control-Allow-Methods', 'GET, POST')
        json_reply.headers.add('Access-Control-Allow-Headers', 'Accept, Content-Type')
        json_reply.content_type = 'application/json'
    else:
        json_reply = make_response('Looks good!', 200)
        json_reply.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        json_reply.headers.add('Access-Control-Allow-Methods', 'POST')
        json_reply.headers.add('Access-Control-Allow-Headers', 'Accept, Content-Type')
        json_reply.content_type = 'text/plain'

    return json_reply
