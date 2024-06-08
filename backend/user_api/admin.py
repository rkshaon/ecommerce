from django.contrib import admin

from user_api.models import User



@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'role',]
    list_filter = ['role',]
    search_fields = ['username', 'email', 'role']