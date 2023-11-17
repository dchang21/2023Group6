"""
    fakeusers.py\n
    Contains fake and hardcoded user data as test return values for the EurekaEats app API. 
"""

## FAKE USER 1 ##

# Represents a fake "new user" to the site.
MOCK_USER_1 = {
    'id': 123456789,
    'username': 'DoeEats',
    'email': 'jdoe22@example.com',
    'password': 'DEMO123',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'location': [51.5085, -0.1257],  # London, UK
    'eating_preferences': {
        'vegan': False,
        'keto': False,
        'gluten_free': False
    },
    'cuisine': ['Italian', 'Anglo', 'Taiwanese'],
    'reviews': []
}
