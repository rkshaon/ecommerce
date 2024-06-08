from django.db.models.signals import pre_save
from django.db.models.signals import post_delete
from django.dispatch import receiver

from category_api.models import Category

from category_api.utilities.category import unique_categoyr_slug_generator
from category_api.utilities.category import delete_icon_file



@receiver(pre_save, sender=Category)
def pre_save_category(sender, instance, *args, **kwargs) -> None:
    """
    Signal handler to ensure a unique slug is generated for Category instances before saving.

    Parameters:
        sender (Model class): The model class (Category) that sends the signal.
        instance (Category): The actual instance of the model that is being saved.
        *args: Additional positional arguments.
        **kwargs: Additional keyword arguments.
    
    Returns:
        None
    """
    if not instance.category_slug:
        instance.category_slug = unique_categoyr_slug_generator(instance)
        

@receiver(post_delete, sender=Category)
def post_deleted_category(sender, instance, *args, **kwargs) -> None:
    """
    Signal handler to ensure category's icon file is deleted after Category is deleted.

    Parameters:
        sender (Model class): The model class (Category) that sends the signal.
        instance (Category): The actual instance of the model that is being saved.
        *args: Additional positional arguments.
        **kwargs: Additional keyword arguments.
    
    Returns:
        None
    """
    delete_icon_file(instance)
