<template>
    <div class="container mt-5 mb-5">
        <!-- <h1 class="text-center">{{ if category}} Products</h1> -->
        <h1 v-if="category" class="text-center">{{ category.title }} Products</h1>
        <h1 v-else class="text-center">Some unknown Products</h1>
        <p class="text-center">Here is some featured products.</p>
        <div class="row">
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
            <div class="col-3">
                <ProductCardComponent />
            </div>
        </div>
    </div>
</template>

<script>
import ProductCardComponent from '@/components/support/ProductCardComponent'


export default {
    name: 'ProductGridViewComponent',
    components: {
        ProductCardComponent,
    },
    props: {
        category: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style></style>