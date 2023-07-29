from django.db import models

from category_api.models import Category



class Product(models.Model):
    title = models.CharField(max_length=255, null=False, blank=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField(null=True, blank=True)
    # images = models.ImageField()
