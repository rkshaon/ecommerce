<template>
    <div>
        <div class="modal" tabindex="-1" id="testModal" ref="testModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal Title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';

export default {
    name: 'ModalComponent',
    methods: {
        showTestModal() {
            console.log('Hello...');
            // let testModal = new bootstrap.Modal(this.$refs.testModal);
            // let testModal = new bootstrap.Modal(document.getElementById('testModal'));
            // let testModal = new bootstrap.Modal.getInstance(this.$refs.testModal);
            // testModal.show();
            // this.$refs['testModal'].show();
            const modalElement = this.$refs.testModal;
            // console.log(modalElement);

            if (modalElement) {
                console.log('Found');
                // const modal = new bootstrap.Modal(modalElement);
                const modal = new Modal(modalElement);
                console.log(typeof modal);
                modal.show();
                // modal.show();
                // modal._showElement;
                // modal.show
                // const modal = new bootstrap.Modal(modalElement);
                // modal.show();
                // this.$refs['testModal'].show();
            } else {
                console.log('404');
            }
        },
        submit() {
            const modalElement = this.$refs.testModal;
            const modal = new Modal(modalElement);
            console.log('Submit button...');
            // modal.hide();
            // modal.dispose();

            modal._hideModal();
            modal._backdrop;
            // modal.hide();

            // setTimeout(() => {
            //     modal.hide();
            // }, 3000);
            console.log('Submit button closing...');
        },
    },
}
</script>