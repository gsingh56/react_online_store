from .database_ops import get_products, get_product
import json


class Products:
    def on_get(self, req, resp):
        resp.text = json.dumps(get_products())



class Product:
    def on_get(self, req, resp):
        product_id = req.params["id"]
        resp.text = json.dumps(get_product(product_id))
