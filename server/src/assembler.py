# ===========================================
# works only with PyJWT 1.7.1
# ===========================================

import falcon
from src import Auth, basic_auth, RefreshToken
from .products import Products, Product
from .uploadProduct import UploadProduct
from falcon_auth import FalconAuthMiddleware
from waitress import serve
from falcon_cors import CORS

# Auth Middleware that uses basic_auth for authentication
auth_middleware = FalconAuthMiddleware(basic_auth)

cors = CORS(allow_origins_list=['http://localhost:3000'], allow_all_methods=True, allow_all_headers = True)
# (middleware=[auth_middleware],
api = falcon.App(middleware=[cors.middleware, auth_middleware])


api.add_route("/auth", Auth())
api.add_route("/refresh", RefreshToken())
api.add_route("/products", Products())
api.add_route("/product", Product())
api.add_route("/upload", UploadProduct())


serve(api, listen='*:5423')
