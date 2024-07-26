<template>
    <div class="modal fade" id="changePasswordModal" tabindex="-1" aria-labelledby="changePasswordModalLabel"
        aria-hidden="true" ref="changePasswordModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="changePasswordModalLabel">Change Password</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-start">
                    <form action="">
                        <div class="mb-3">
                            <label for="exampleInputText2" class="form-label">Current Password</label>
                            <input type="text" class="form-control" id="exampleInputText2"
                                v-model="changePasswordData.currentPassword">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputText2" class="form-label">New Password</label>
                            <input type="text" class="form-control" id="exampleInputText2"
                                v-model="changePasswordData.newPassword">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputText2" class="form-label">Confirm Password</label>
                            <input type="text" class="form-control" id="exampleInputText2"
                                v-model="changePasswordData.confirmPassword">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="confirmUpdate">Save
                        changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API_BASE_URL } from '@/config';
import { Modal } from 'bootstrap';
import { mapActions } from 'vuex';
import { useToast } from 'vue-toastification';

export default {
    name: 'AdminChangePasswordModal.vue',
    components: {
    },
    props: {
    },
    data() {
        return {
            API_BASE_URL: API_BASE_URL,
            changePasswordData: {
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
            }
        }
    },
    methods: {
        ...mapActions('user', ['changePassword']),

        async showChangePasswordModal() {
            const modalElement = this.$refs.changePasswordModal;

            if (modalElement) {
                const modal = new Modal(modalElement);
                modal.show();
            } else {
                const toast = useToast();
                toast.error("404");
                console.log('404');
            }
        },

        async confirmUpdate() {
            console.log('Confirm update function called.');
            const toast = useToast();
            console.log('data:', this.changePasswordData);
            toast.info("work in progress");

            try {
                const changePasswordResponse = await this.changePassword(this.changePasswordData);
                console.log(changePasswordResponse.data);
                this.$emit('changePassword', changePasswordResponse);
                toast.success('Category created!');
            } catch (error) {
                console.log('Failed:', error);
                console.log(error.data);
                toast.error('Failed to create category.');
            }

            // const modalElement = this.$refs.changePasswordModal;
            // const modal = new Modal(modalElement);
            // modal._hideModal();
        },
    }
}
</script>