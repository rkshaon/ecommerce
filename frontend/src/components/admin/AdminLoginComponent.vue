<template>
    <div id="login-container" class="d-flex justify-content-center align-items-center">
        <div id="login-deep-container" class="d-flex shadow-lg rounded">
            <h1>Log in</h1>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'AdminLoginComponent',
}
</script>

<style scoped>
#login-container {
    background-color: rgb(124, 125, 125);
    
    width: 100%;
    height: 100vh;
}
#login-deep-container {
    width: 150vh;
    height: 75vh;
    background-color: rgb(108, 111, 111);
}
</style>