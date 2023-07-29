from django.db import models
from django.utils.text import slugify

from django.contrib.auth.models import User
from category_api.models import Category



class ProductImage(models.Model):
    # product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products/')
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
    added_by = models.ForeignKey(User, on_delete=models.CASCADE)
    added_date_time = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.id}"


class Product(models.Model):
    title = models.CharField(max_length=255, null=False, blank=False)
    product_slug = models.SlugField(unique=True, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField(null=True, blank=True)
    images = models.ManyToManyField(
        to=ProductImage, 
        related_name='product_images',
        blank=True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
    added_by = models.ForeignKey(User, on_delete=models.CASCADE)
    added_date_time = models.DateTimeField(auto_now_add=True)


    def save(self, *args, **kwargs):
        if not self.product_slug:
            self.product_slug = slugify(self.title)
        
        super().save(*args, **kwargs)
    

    def __str__(self):
        return f"{self.id}: {self.title}"