<template>
    <div>
        <b-button id="show-btn" @click="showTestModal">Open Modal</b-button>

        <b-modal ref="testModal" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
                <h3>Hello From My Modal!</h3>
            </div>
            <b-button class="mt-3" variant="outline-danger" block>Close Me</b-button>
            <b-button class="mt-2" variant="outline-warning" block>Toggle Me</b-button>
        </b-modal>
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
        // submit() {
        //     const modal = bootstrap.Modal.getInstance(this.$refs.exampleModal);
        //     setTimeout(() => {
        //         modal.hide();
        //     }, 3000);
        // },
    },
}
</script>