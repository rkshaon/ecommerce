<template>
    <div class="container-fluid" style="background-color: #242526; color: aliceblue;">
        <div class="container">
            <div class="row">
                <div class="col-4 pt-5 pb-5" style="background-color: #151616;">
                    <div>
                        <font-awesome-icon :icon="['fas', 'phone']" size="2xl" style="background-color: #39c7da; border-radius: 50%; padding: 15px;"/>
                        <p class="text-center">
                            <a href="tel:+8801521205142" style="text-decoration: none;" class="text-white">+880 1521 20 51 42</a>
                        </p>
                    </div>
                </div>
                <div class="col-4 pt-5 pb-5 footer-item">
                    <div>
                        <font-awesome-icon :icon="['fas', 'envelope']" size="2xl" style="background-color: #39c7da; border-radius: 50%; padding: 15px;"/>
                        <p class="text-center">
                            <a href="mailto:rkshaon.ist@gmail.com" style="text-decoration: none;" class="text-white">rkshaon.ist@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div class="col-4 pt-5 pb-5 footer-item" style="background-color: #151616;">
                    <div>
                        <font-awesome-icon :icon="['fas', 'map-pin']" size="2xl" style="background-color: #39c7da; border-radius: 50%; padding: 15px 20px;"/>
                        <p class="text-center">
                            <a href="https://goo.gl/maps/uvQvRnu3ucRDuamw9" target="_blank" style="text-decoration: none;" class="text-white">Floor # 3, House # 11/B, Road # 30, Gulshan 1, Dhaka.</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="row mt-5 pb-5">
                <div class="col-2">
                    Support
                </div>
                <div class="col-2">
                    About Us
                </div>
                <div class="col-2">
                    About Us
                </div>
                <div class="col-2">
                    About Us
                </div>
                <div class="col-2">
                    Stay Connected
                </div>
                <div class="col-2">
                    <h5>Stay Connected</h5>
                    <ul class="" style="padding: 0%;">
                        <li class="list-group-item pt-2">
                            <a href="https://www.facebook.com/rkshaon/" target="_blank" style="text-decoration: none; color: #fff;">
                                <font-awesome-icon :icon="['fab', 'facebook']" size="2xl" style=""/>
                            </a>
                        </li>
                        <li class="list-group-item pt-2">
                            <a href="https://twitter.com/rkshaon97" target="_blank" style="text-decoration: none; color: #fff;">
                                <font-awesome-icon :icon="['fab', 'twitter']" size="2xl" style=""/>
                            </a>
                        </li>
                        <li class="list-group-item pt-2">
                            <a href="https://www.youtube.com/@rezaulkarimshaon/" target="_blank" style="text-decoration: none; color: #fff;">
                                <font-awesome-icon :icon="['fab', 'youtube']" size="2xl" style=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row pt-3 pb-3">
                <div>Experience us on PlayStore and AppStore</div>
            </div>
            <div class="row pt-3 pb-3">
                <div>&copy; 2023 by Rezaul Karim Shaon</div>
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