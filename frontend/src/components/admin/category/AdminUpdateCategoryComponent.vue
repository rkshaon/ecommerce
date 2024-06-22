<template>
    <!-- Update category modal -->
    <div class="modal fade" id="updateCategoryModal" tabindex="-1" aria-labelledby="updateCategoryModalLabel"
        aria-hidden="true" ref="updateCategoryModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="updateCategoryModalLabel">Update Category</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-start">
                    <form action="">
                        <div class="mb-3">
                            <label for="exampleInputText1" class="form-label">Title</label>
                            <input type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp1"
                                v-model="updateForm.title">
                            <div id="textHelp1" class="form-text">Category name must be unique.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputText2" class="form-label">Short Title</label>
                            <input type="text" class="form-control" id="exampleInputText2"
                                v-model="updateForm.short_title">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputText3" class="form-label">Icon</label>
                            <img v-if="updateForm.icon" :src="`${API_BASE_URL}${updateForm.icon}`"
                                :alt="updateForm.title" height="50" />
                            <input type="file" class="form-control" id="exampleInputText3"
                                @change="handleFileChangeOnUpdate">
                        </div>
                        <div class="mb-3">
                            <label for="exampleTextarea" class="form-label">Description</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"
                                v-model="updateForm.description" maxlength="255">
                                </textarea>
                            <div class="ms-3 text-end">
                                <span class="text-muted small">{{ updateForm.description.length }} / 255</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="updateCategory(updateForm.id)">Save
                        changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { API_BASE_URL } from '@/config';
import { Modal } from 'bootstrap';

export default {
    name: 'AdminUpdateCategoryComponent',
    data() {
        return {
            API_BASE_URL: API_BASE_URL,
            updateCategoryId: null,
            updateForm: {
                id: '',
                title: '',
                short_title: '',
                icon: null,
                description: '',
            },
        }
    },
    methods: {
        ...mapActions('category', ['fetchCategory', 'updateCategory']),

        async showUpdateCategoryModal(id) {
            this.updateCategoryId = id;

            try {
                this.updateForm = await this.fetchCategory(this.updateCategoryId);
            } catch (error) {
                console.log('Failed:', error);
            }

            const modalElement = this.$refs.updateCategoryModal;
            
            if (modalElement) {
                const modal = new Modal(modalElement);
                modal.show();
            } else {
                console.log('404');
            }
        },
    }
}
</script>