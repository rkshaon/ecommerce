from django.contrib import admin

from category_api.models import Category



@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'title', 
        'category_slug', 
        'short_title',
        'description', 
        'is_active',
        'is_featured', 
        'is_deleted'
    )
    list_filter = (
        'is_featured',
        'is_active',
        'is_deleted',
    )
    search_fields = ('title', 'short_title', 'description')
