from rest_framework import serializers

from product_api.models import Product
from product_api.models import ProductImage


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        representation['images'] = [
            ProductImageSerializer(
                image).data for image in instance.images.all()
        ]
        return representation


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'
