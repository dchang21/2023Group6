"""
    appcodes.py\n
    Contains constants for in-application API calls. Specifically, there are named constants for action codes and payload types based on SRD Section 3.4.\n
    TODO: Add error codes later to documents and this file.
"""

## ACTION CODES ##

EE_UNKNOWN = -1
EE_SEARCH_RESTAURANT = 0
# EE_ADD_RESTAURANT = 1
# EE_UPDATE_RESTAURANT = 2
# EE_DELETE_RESTAURANT = 3

EE_SEARCH_REVIEWS = 16
EE_CREATE_REVIEW = 17
EE_UPDATE_REVIEW = 18
EE_DELETE_REVIEW = 19

EE_GET_USER_INFO = 32
EE_UPDATE_USER_PROFILE = 33
EE_UPDATE_USER_PREFERENCES = 34
EE_TEST_DUMMY_CALL = 47  # dummy API placeholder

## PAYLOAD CODES ##

EE_PAYLOAD_NUMBER = 0
EE_PAYLOAD_STRING = 1
EE_PAYLOAD_OBJECT = 2
EE_PAYLOAD_BOOLEAN = 3
