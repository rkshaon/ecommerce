import os
import sys
import shutil

base_dir = os.path.dirname(os.path.realpath(__file__))

locations = [
    "__pycache__",
    "ecommerce/__pycache__",
    "ecommerce/migrations",
    "user_api/__pycache__",
    "user_api/migrations",
    "category_api/__pycache__",
    "user_api/migrations",
]

for path in locations:
    try:
        path = os.path.join(base_dir, path)
        shutil.rmtree(path)
        print("Deleted: " + path)
    except OSError as e:
        print("Error: %s - %s." % (e.filename, e.strerror))
