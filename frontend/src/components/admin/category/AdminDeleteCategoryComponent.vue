<template>
    <div class="modal fade" id="deleteCategoryModal" tabindex="-1" aria-labelledby="deleteCategoryModalLabel"
        aria-hidden="true" ref="deleteCategoryModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteCategoryModalLabel">Delete Category</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-start">
                    <div class="mb-3">
                        <label for="exampleInputText1" class="form-label">Are you sure?</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger" @click="confirmDelete">Yes, delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Modal } from 'bootstrap';

export default {
    name: 'AdminDeleteCategoryComponent',
    data() { 
        return {
            deleteCategoryId: null,
        }
    },
    methods: {
        ...mapActions('category', ['deleteCategory']),

        showDeleteCategoryModal(id) {
            const modalElement = this.$refs.deleteCategoryModal;            
            this.deleteCategoryId = id;

            if (modalElement) {
                const modal = new Modal(modalElement);
                modal.show();
            } else {
                console.log('404');
            }
        },

        async confirmDelete() {
            try {
                await this.deleteCategory(this.deleteCategoryId);
            } catch (error) {
                console.log('Failed:', error);
            }

            const modalElement = this.$refs.deleteCategoryModal;
            const modal = new Modal(modalElement);
            modal._hideModal();
        },
    },
}
</script>