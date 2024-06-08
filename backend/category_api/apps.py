from django.apps import AppConfig


class CategoryApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'category_api'


    def ready(self) -> None:
        import category_api.signals
        return super().ready()
