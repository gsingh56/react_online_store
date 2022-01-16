# ===========================================
# works only with PyJWT 1.7.1
# ===========================================

import falcon
from src import Auth, basic_auth, RefreshToken
from .products import Products, Product
from falcon_auth import FalconAuthMiddleware
from waitress import serve

# Auth Middleware that uses basic_auth for authentication
auth_middleware = FalconAuthMiddleware(basic_auth)


api = falcon.App(middleware=[auth_middleware], cors_enable=True)


api.add_route("/auth", Auth())
api.add_route("/refresh", RefreshToken())
api.add_route("/products", Products())
api.add_route("/product", Product())


serve(api, listen='*:5424')
