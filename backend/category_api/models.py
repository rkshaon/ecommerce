from django.db import models
from django.utils.text import slugify

import itertools

from user_api.models import User




class Category(models.Model):
    title = models.CharField(max_length=255, blank=False, null=False)
    category_slug = models.SlugField(unique=True, blank=True, null=True)
    short_title = models.CharField(max_length=255, blank=True, null=True)
    icon = models.FileField(upload_to='icon', null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
    added_by = models.ForeignKey(User, on_delete=models.CASCADE)
    added_date_time = models.DateTimeField(auto_now_add=True)
    

    def save(self, *args, **kwargs):
        if not self.category_slug:
            self.category_slug = slugify(self.title)

        original_slug = self.category_slug
        for x in itertools.count(1):
            if not Category.objects.filter(category_slug=self.category_slug).exists():
                break
            self.category_slug = f'{original_slug}-{x}'

        super().save(*args, **kwargs)


    def __str__(self):
        return f"{self.id}: {self.title}"