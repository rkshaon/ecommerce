<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-4">
                <AdminProfileCardComponent :profileData="profileData" class="mb-3" />
            </div>
        </div>
        <AdminChangePasswordModal ref="changePasswordModal" />
        <AdminUpdateUserProfileModal :profileData="profileData" ref="updateModalForUser" />
        <button type="button" class="btn btn-warning" @click="showChangePasswordModal">
            Change Password
        </button>
        <button type="button" class="btn btn-info" @click="showUpdateProfileModal">
            Edit Profile
        </button>
    </div>
</template>

<script>
import { API_BASE_URL } from '@/config';
import { mapState, mapActions } from 'vuex';
import AdminProfileCardComponent from '@/components/admin/user/AdminProfileCardComponent.vue';
import AdminChangePasswordModal from '@/components/admin/user/AdminChangePasswordModal.vue';
import AdminUpdateUserProfileModal from '@/components/admin/user/AdminUpdateUserProfileModal.vue';

export default {
    name: 'AdminProfilePage',
    components: {
        AdminProfileCardComponent,
        AdminUpdateUserProfileModal,
        AdminChangePasswordModal,
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

        showChangePasswordModal() {
            console.log('change password modal clicked');
            this.$refs.changePasswordModal.showChangePasswordModal();
        },

        showUpdateProfileModal() {
            console.log('update profile clicked.');
            this.$refs.updateModalForUser.showUpdateUserModal();
        },
    },
    created() {
        this.fetchUserProfile();
    },
}
</script>