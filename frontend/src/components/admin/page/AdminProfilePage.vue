<template>
    <div class="container mt-5">
        <h2>{{ profileData.name }}</h2>
        <img alt="Profile Picture" />
        <p>Email: {{ profileData.email }}</p>
        <p>Username: {{ profileData.username }}</p>
        <button class="btn btn-warning">Change Password</button>
        <button class="btn btn-info">Edit Profile</button>
    </div>
</template>

<script>
import { API_BASE_URL } from '@/config';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'AdminProfilePage',
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