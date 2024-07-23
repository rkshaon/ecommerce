<template>
    <div class="container-fluid" style="background-color: #242526; color: aliceblue;">
        <div class="container">
            <div class="row">
                <div class="col-4 pt-5 pb-5 footer-item">
                    <a href="tel:+8801521205142" style="text-decoration: none;" class="text-white">
                        <div>
                            <div class="text-center">
                                <font-awesome-icon :icon="['fas', 'phone']" size="2xl" style="background-color: #39c7da; border-radius: 50%; padding: 15px;"/>
                            </div>
                            <p class="text-center pt-3">+880 1521 20 51 42</p>
                        </div>
                    </a>
                </div>
                <div class="col-4 pt-5 pb-5 footer-item">
                    <a href="mailto:rkshaon.ist@gmail.com" style="text-decoration: none;" class="text-white">
                        <div>
                            <div class="text-center">
                                <font-awesome-icon :icon="['fas', 'envelope']" size="2xl" style="background-color: #39c7da; border-radius: 50%; padding: 15px;"/>
                            </div>
                            <p class="text-center pt-3">rkshaon.ist@gmail.com</p>
                        </div>
                    </a>
                </div>
                <div class="col-4 pt-5 pb-5 footer-item">
                    <a href="https://goo.gl/maps/uvQvRnu3ucRDuamw9" target="_blank" style="text-decoration: none;" class="text-white">
                        <div>
                            <div class="text-center">
                                <font-awesome-icon :icon="['fas', 'map-pin']" size="2xl" style="background-color: #39c7da; border-radius: 50%; padding: 15px 20px;"/>
                            </div>
                            <p class="text-center pt-3">Floor # 3, House # 11/B, Road # 30, Gulshan 1, Dhaka.</p>
                        </div>
                    </a>
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
            <div class="row pt-3 pb-3" style="">
                <div class="text-center">Experience us on PlayStore and AppStore</div>
            </div>
            <div class="row pt-3 pb-3">
                <div class="text-center">&copy; 2024 by Rezaul Karim Shaon</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterLayout',
}
</script>

<style>
.footer-item:hover {
    background-color: #363636;
    transition: 1s;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>