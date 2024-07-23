<template>
    <div class="container mt-5">
        <AdminProfileCardComponent :profileData="profileData" class="mb-3" />
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