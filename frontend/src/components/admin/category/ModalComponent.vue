<template>
    <div class="modal fade" id="testModal" tabindex="-1" aria-labelledby="testModalLabel" aria-hidden="true"
        ref="testModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="testModalLabel">Delete Category</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-start">
                    <div class="mb-3">
                        <label for="exampleInputText1" class="form-label">Are you sure?</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger">Yes, delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bootstrap from 'bootstrap';

export default {
    name: 'ModalComponent',
    methods: {
        showTestModal() {
            let testModal = new bootstrap.Modal.getInstance(this.$refs.testModal);
            testModal.show();
        },        
    },
}
</script>