"""
    fakeusers.py\n
    Contains fake and hardcoded user data as test return values for the EurekaEats app API. 
"""

## FAKE USER 1 ##

# Represents a fake "new user" to the site.
MOCK_USER_1 = {
    'id': 123456789,
    'username': 'DoeEats',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'location': [51.5085, -0.1257],  # London, UK
    'eating_preferences': {
        'vegan': False,
        'keto': False,
        'gluten_free': False
    },
    'protein': {
        'beef': False,
        'chicken': True,
        'pork': True,
        'tofu': False,
        'lamb': False
    },
    'cuisine': {
        'Italian': True,
        'Chinese': False,
        'Japanese': False,
        'Taiwanese': True,
        'Indian': False,
        'Thai': False,
        'French': True,
        'American': True,
        'Mexican': True
    },
    'reviews': [
        {
            'restaurant_id': 11235813,
            'restaurant_name': 'Lambert\'s Pub',
            'date_time': '2023-10-25 17:39:21.123456', # NOTE: This should convert from ms ticks since 1/1/0001 to a readable date string in JSON.
            'star_rating': 4,
            'comment': 'Oh my word! Their bangers and mash are quite juicy and well done. The shot of beer hits the spot.'
        }
    ]
}


