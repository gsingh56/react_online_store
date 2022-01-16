import json
import jwt
import falcon
from src import get_users
from developer_keys import SECRET_KEY
from falcon_auth import JWTAuthBackend

# a loader function to fetch user from username, password
def user_loader(user_dict):
    if validate_user(user_dict['user']['username'], user_dict['user']['password']):
        return {"user": user_dict['user']['username'], "password": user_dict['user']['password']}
    return None


# basic auth backend
basic_auth = JWTAuthBackend(user_loader, SECRET_KEY, auth_header_prefix='jwt', expiration_delta=50)

def validate_user (username, password):
    users = get_users()
    for user in users:
        if username in user:
            if password in user:
                return True
    return False

class Auth:

    auth = {
        'exempt_methods': ['POST']
    }

    def on_get(self, req, resp):
        resp.complete = True
        resp.text = json.dumps(get_users())
        resp.status = falcon.HTTP_200

    def on_post(self, req, resp):
            username = req.media['username']
            password = req.media['password']
            if validate_user(username, password):
                resp.text = json.dumps({"token":basic_auth.get_auth_token({'username': username, "password": password})})
                resp.status = falcon.HTTP_200
            else:
                raise falcon.HTTPUnauthorized(title='Authentication failed')

class RefreshToken:

    def on_get(self, req, resp):
        username = req.context['user']['user']
        password = req.context['user']['password']
        resp.text = json.dumps({"token": basic_auth.get_auth_token({'username': username, "password": password})})


