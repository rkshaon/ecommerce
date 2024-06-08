from django.db.models.signals import pre_save
from django.dispatch import receiver

from category_api.models import Category

from category_api.utilities.category import unique_categoyr_slug_generator



@receiver(pre_save, sender=Category)
def pre_save_category(sender, instance, *args, **kwargs) -> None:
    """
    Signal handler to ensure a unique slug is generated for Category instances before saving.

    This function is connected to the Django `pre_save` signal for the `Category` model.
    It checks if the `category_slug` field is empty before the instance is saved.
    If the slug is empty, it calls the `unique_slug_generator` function to generate a unique slug
    based on the category name.

    Parameters:
        sender (Model class): The model class (Category) that sends the signal.
        instance (Category): The actual instance of the model that is being saved.
        *args: Additional positional arguments.
        **kwargs: Additional keyword arguments.
    
    Returns:
        None

    Usage:
        - This signal handler is automatically triggered before a Category instance is saved.
        - It ensures that the `category_slug` field is populated with a unique value.

    Example:
        - If a new Category instance with the name "Electronics" is saved without a slug, 
          this function will generate a slug like "electronics".
        - If another Category instance with the same name "Electronics" is saved, the function
          will generate a unique slug like "electronics-1" to avoid duplication.

    Note:
        - This function relies on the `unique_slug_generator` utility function to generate the slugs.
        - Make sure the `unique_slug_generator` function is implemented correctly to handle slug uniqueness.
    """
    if not instance.category_slug:
        instance.category_slug = unique_categoyr_slug_generator(instance)
        
