<template>
    <div id="login-container" class="d-flex justify-content-center align-items-center">
        <div id="login-deep-container" class="d-flex shadow-lg rounded">
            <div class="container">
                <div class="row pt-5 pb-5">
                    <div class="col-4">
                        <img src="@/assets/company-logo.png" alt="logo" width="100%" />
                    </div>
                    <div class="col-1" style="border-left: 3px solid #051B11; height: auto;">
                    </div>  
                    <div class="col-7 text-white">
                        <h1 class="pt-3 pb-5 text-center">E-Commerce Admin Login</h1>
                        <form @submit.prevent="adminLogin">
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder="Username / Cell no / E-mail" 
                                class="form-control mb-3"      
                                v-model="user_credential"                          
                            >
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Password" 
                                class="form-control mb-5"
                                v-model="password"
                            >
                            <button 
                                type="submit" 
                                class="btn btn-success"
                                style="font-weight: bold;"
                            >
                                Log in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'AdminLoginComponent',
    data() {
        return {
            user_credential: '',
            password: '',
        };
    },
    methods: {
        async adminLogin() {
            console.log('Handler: ', this.user_credential);
            console.log('Password: ', this.password);
        },
    }
}
</script>

<style scoped>
#login-container {
    width: 100%;
    height: 100vh;
    background-color: #092f1e;
}
#login-deep-container {
    width: 150vh;
    padding-top: 10vh;
    padding-bottom: 10vh;
    background-color: #0A3622;
}
</style>