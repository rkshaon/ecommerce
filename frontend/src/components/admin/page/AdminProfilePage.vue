<template>
    <div class="container mt-5">
        <AdminProfileCardComponent :profileData="profileData" />
        <!-- <h2 v-if="profileData.name">{{ profileData.name }}</h2>
        <h2 v-else>Update your profile to set name.</h2>
            <img v-if="profileData.picture" :src="`${API_BASE_URL}${profileData.picture}`" :alt="profileData.name"
                height="250" />
            <img v-else src="@/assets/loading.gif" alt="Static Photo" height="250">
            <p>Email: {{ profileData.email }}</p>
            <p>Username: {{ profileData.username }}</p>
            <button class="btn btn-warning">Change Password</button>
            <button class="btn btn-info">Edit Profile</button> -->
        <button class="btn btn-warning">Change Password</button>
        <button class="btn btn-info">Edit Profile</button>
    </div>
</template>

<script>
import { API_BASE_URL } from '@/config';
import { mapState, mapActions } from 'vuex';
import AdminProfileCardComponent from '@/components/admin/user/AdminProfileCardComponent.vue';

export default {
    name: 'AdminProfilePage',
    components: {
        AdminProfileCardComponent,
    },
    data() {
        return {
            API_BASE_URL: API_BASE_URL,
        }
    },
    computed: {
        ...mapState('user', {
            profileData: 'profile'
        }),
    },
    methods: {
        ...mapActions('user', ['fetchUserProfile']),
    },
    created() {
        this.fetchUserProfile();
    },
}
</script>