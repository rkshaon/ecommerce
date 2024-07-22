<template>
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel"
        aria-hidden="true" ref="addProductModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addProductModalLabel">Add Product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createProduct">
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
import { useToast } from "vue-toastification";

export default {
    name: 'AdminAddProductComponent',
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

        showAddProductModal() {
            const modalElement = this.$refs.addProductModal;

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

        async createProduct() {
            // const formData = new FormData();

            // formData.append('title', this.categoryForm.title);
            // formData.append('short_title', this.categoryForm.short_title);
            // formData.append('description', this.categoryForm.description);
            // formData.append('is_active', true);

            // if (this.categoryForm.icon) {
            //     formData.append('icon', this.categoryForm.icon);
            // }
            const toast = useToast();
            toast.warning('WIP');

            // try { 
            //     const addedCategory = await this.addCategory(formData);
            //     this.$emit('categoryAdded', addedCategory);
            //     toast.success('Category created!');
            // } catch (error) {
            //     console.log('Failed:', error);
            //     toast.error('Failed to create category.');
            // }

            const modalElement = this.$refs.addProductModal;
            const modal = new Modal(modalElement);
            modal._hideModal();
        },
    },
}
</script>