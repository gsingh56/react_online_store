import os

IMAGE_DIR = r"C:\projects\e-commerce\react_online_store\static\src\images"

class UploadProduct:
    def on_post(self, req, resp):
        form = req.get_media()

        for part in form:

        # product_title = req.get_media('title')
        # product_description = req.get_param('description')
        # product_price = req.get_param('price')
        # product_category = req.get_param('category')
        # product_image = req.get_param('image')

        # print(product_title)

            temp_file_path = os.path.join(IMAGE_DIR, "yu")
            file_path = os.path.join(IMAGE_DIR, "tt")
            with open(temp_file_path, 'wb') as dest:
                part.stream.pipe(dest)

            # Now that we know the file has been fully saved to disk
            # move it into place.
            # os.rename(temp_file_path, file_path)

        resp.text = "success!"






