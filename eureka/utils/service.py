"""
    service.py\n
    Defines a class as a generic interface to run MongoDB commands through PyMongo. This is a database service wrapper.
"""

from eureka.utils.constants import MONGODB_CONN_STR

from pymongo import MongoClient

class MongoService:
    def __init__(self, db_url: str = MONGODB_CONN_STR):
        self.mdb_client = MongoClient(db_url)
        self.ee_db = self.mdb_client.get_database('EurekaEats')
    
    def close_service(self):
        self.mdb_client.close()
    
    def get_collection(self, collection_name: str = ""):
        if not collection_name:
            return None

        return self.ee_db.get_collection(collection_name)

DB_SERVICE = MongoService()
