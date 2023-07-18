<template>
    <b-carousel id="carousel-example-generic" class="my-4" fade>
        <b-carousel-item v-for="image in images" :key="image.id">
            <img 
                :src="image.src" 
                :data-src="image.src"
                :alt="image.alt" 
                class="d-block w-50"
                @click.stop="handleClick" 
            />
        </b-carousel-item>
    </b-carousel>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SliderComponent',
    data() {
        return {
            images: [
                {
                    id: 1,
                    src: 'https://via.placeholder.com/150x150',
                    alt: 'Image 1',
                },
                {
                    id: 2,
                    src: 'https://via.placeholder.com/150x150',
                    alt: 'Image 2',
                },
                {
                    id: 3,
                    src: 'https://via.placeholder.com/150x150',
                    alt: 'Image 3',
                },
            ],
        };
    },
    methods: {
        handleClick(event) {
            console.log(event);
            console.log('Hello');
            // handle the click event
        },
    },
});
</script>
