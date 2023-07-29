from django.contrib import admin


from product_api.models import Product
from product_api.models import ProductImage



admin.site.register(Product)
admin.site.register(ProductImage)