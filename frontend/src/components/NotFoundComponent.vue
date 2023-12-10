<template>
    <div class="container">
        <h1>404 - Not found!</h1>
        <p>Sorry, the page you are looking does not exit.</p>
        <router-link to="/">
            <p>Go to Home</p>
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'NotFoundComponent',
};
</script>