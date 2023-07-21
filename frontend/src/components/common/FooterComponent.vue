<template>
    <div class="container-fluid" style="background-color: #242526; color: aliceblue; height: 500px;">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-3 pt-5" style="background-color: #151616;">
                <div>
                    <font-awesome-icon :icon="['fas', 'phone']" size="2xl" style="background-color: #39c7da; border-radius: 50%; padding: 15px;"/>
                    <p class="text-center">
                        <a href="tel:+8801521205142" style="text-decoration: none;" class="text-white">+880 1521 20 51 42</a>
                    </p>
                </div>
            </div>
            <div class="col-3 pt-5 footer-item">
                <div>
                    <font-awesome-icon :icon="['fas', 'envelope']" size="2xl" style="background-color: #39c7da; border-radius: 50%; padding: 15px;"/>
                    <p class="text-center">
                        <a href="mailto:rkshaon.ist@gmail.com" style="text-decoration: none;" class="text-white">rkshaon.ist@gmail.com</a>
                    </p>
                </div>
            </div>
            <div class="col-3 pt-5 footer-item" style="background-color: #151616;">
                <div>
                    <font-awesome-icon :icon="['fas', 'map-pin']" size="2xl" style="background-color: #39c7da; border-radius: 50%; padding: 15px 20px;"/>
                    <p class="text-center">
                        <a href="https://goo.gl/maps/uvQvRnu3ucRDuamw9" target="_blank" style="text-decoration: none;" class="text-white">Floor # 3, House # 11/B, Road # 30, Gulshan 1, Dhaka.</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style>
.footer-item::hover {
    background-color: #151616
}
</style>