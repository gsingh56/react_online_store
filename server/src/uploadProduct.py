import os
from .database_ops import add_product
IMAGE_DIR = r"C:\projects\e-commerce-store\react_online_store\static\src\images"

class UploadProduct:
    def on_post(self, req, resp):
        form = req.get_media()

        for part in form:

            if part.name == "title":
                title = part.text
            elif part.name == "description":
                description = part.text
            elif part.name == "price":
                price = part.text
            elif part.name == "category":
                category = part.text
            elif part.name == "imageFileName":
                file_name = part.text
            elif part.name == "imageFile":
                temp_file_path = os.path.join(IMAGE_DIR, "temp")
                with open(temp_file_path, 'wb') as dest:
                    part.stream.pipe(dest)

            # Now that we know the file has been fully saved to disk
            # move it into place.
        file_path = os.path.join(IMAGE_DIR, file_name)
        os.rename(temp_file_path, file_path)

        add_product(title, price, description, category, file_name)
        resp.text = "success!"






