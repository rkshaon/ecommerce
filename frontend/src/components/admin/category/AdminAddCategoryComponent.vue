<template>
    <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="addCategoryModalLabel"
        aria-hidden="true" ref="addCategoryModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addCategoryModalLabel">Add Category</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createCategory">
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" class="form-control" id="title" v-model="categoryForm.title">
                        </div>
                        <div class="mb-3">
                            <label for="shortTitle" class="form-label">Short Title</label>
                            <input type="text" class="form-control" id="shortTitle" v-model="categoryForm.short_title">
                        </div>
                        <div class="mb-3">
                            <label for="icon" class="form-label">Icon</label>
                            <input type="file" class="form-control" id="icon" @change="handleFileChangeOnInsert">
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="3" v-model="categoryForm.description"
                                maxlength="255"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap';
import { mapActions } from 'vuex';

export default {
    name: 'AdminAddCategoryComponent',
    data() {
        return {
            categoryForm: {
                title: '',
                short_title: '',
                icon: null,
                description: '',
            }
        }
    },
    methods: {
        ...mapActions('category', ['addCategory']),

        showAddCategoryModal() {
            const modalElement = this.$refs.addCategoryModal;

            if (modalElement) {
                const modal = new Modal(modalElement);
                modal.show();
            } else {
                console.log('404');
            }
        },

        handleFileChangeOnInsert(event) {
            this.categoryForm.icon = event.target.files[0];
        },

        async createCategory() {
            const formData = new FormData();

            formData.append('title', this.categoryForm.title);
            formData.append('short_title', this.categoryForm.short_title);
            formData.append('description', this.categoryForm.description);
            formData.append('is_active', true);

            if (this.categoryForm.icon) {
                formData.append('icon', this.categoryForm.icon);
            }
            
            try { 
                const addedCategory = await this.addCategory(formData);
                this.$emit('categoryAdded', addedCategory);
            } catch (error) {
                console.log('Failed:', error);
            }

            const modalElement = this.$refs.addCategoryModal;
            const modal = new Modal(modalElement);
            modal._hideModal();
        },
    },
}
</script>