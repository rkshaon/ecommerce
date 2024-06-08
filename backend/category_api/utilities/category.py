from django.utils.text import slugify

import os



def unique_categoyr_slug_generator(instance, new_slug=None) -> str:
    """
    Generates a unique slug for a given model instance.

    This function generates a unique slug for the instance based on its title. If a new slug is provided,
    it uses that slug; otherwise, it generates one from the instance's title. If the generated slug already
    exists in the database, the function appends a suffix to make it unique.

    Parameters:
        instance (Model instance): The instance of the model for which the slug is being generated.
        new_slug (str, optional): A new slug to use instead of generating one from the title. Defaults to None.

    Returns:
        str: A unique slug for the instance.

    Example:
        - If an instance with the title "Sample Category" is provided and there is no existing slug,
        this function might return "sample-category".
        - If another instance with the same title is saved, this function will generate a unique slug
        such as "sample-category-1".

    Note:
        - This function recursively generates a new slug if a conflict is found, ensuring the slug is unique.
    """
    if new_slug is not None:
        slug = new_slug
    else:
        slug = slugify(instance.title)

    Klass = instance.__class__
    qs_exists = Klass.objects.filter(category_slug=slug).exists()

    if qs_exists:
        new_slug = f"{slug}-{Klass.objects.filter(category_slug__startswith=slug).count() + 1}"
        
        return unique_categoyr_slug_generator(instance, new_slug=new_slug)
    
    return slug


def delete_icon_file(instance) -> None:
    if instance.icon:
        if os.path.isfile(instance.icon.path):
            os.remove(instance.icon.path)
