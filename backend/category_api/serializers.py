from rest_framework import serializers

from category_api.models import Category



class CategorySerializer(serializers.ModelSerializer):
    """Serializer for the Category model."""
    class Meta:
        model = Category
        fields = '__all__'
    

    def get_serializer(self, instance):
        """Returns a serializer instance for the given instance."""
        return self.__class__(instance=instance)
    

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        
        representation['children'] = [
            self.get_serializer(child).data for child in instance.children.all()
        ]
        return representation
    