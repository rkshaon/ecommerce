<template>
    <div class="container mt-5">
        <button type="button" class="btn btn-primary btn-lg mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <font-awesome-icon :icon="['fas', 'plus']" class="me-2" />
            Add Category
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-start">
                        <form action="">
                            <div class="mb-3">
                                <label for="exampleInputText1" class="form-label">Title</label>
                                <input type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp1">
                                <div id="textHelp1" class="form-text">Category name must be unique.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputText2" class="form-label">Short Title</label>
                                <input type="text" class="form-control" id="exampleInputText2">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputText3" class="form-label">Icon</label>
                                <input type="file" class="form-control" id="exampleInputText3">
                            </div>
                            <div class="mb-3">
                                <label for="exampleTextarea" class="form-label">Description</label>
                                <textarea class="form-control" id="exampleTextarea" rows="3" v-model="categoryForm.description" maxlength="255">
                                </textarea>
                                <div class="ms-3 text-end">
                                    <span class="text-muted small">{{ categoryForm.description.length }} / 255</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button 
                            type="button" 
                            class="btn btn-primary"
                            @click="saveCategory"
                        >Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="shadow-lg">
                    <div class="card bg-dark text-white">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center pt-3">
                                <p class="card-text px-3">Total Categories</p>
                                <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" class="pe-3" />
                            </div>
                            <div class="d-flex justify-content-between pb-3">
                                <h3 class="card-title px-3">2150</h3>
                                <a href="#" class="btn btn-primary me-3">Any state</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="shadow-lg">
                    <div class="card bg-dark text-white">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center pt-3">
                                <p class="card-text px-3">Active Categories</p>
                                <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" class="pe-3" />
                            </div>
                            <div class="d-flex justify-content-between pb-3">
                                <h3 class="card-title px-3">177</h3>
                                <a href="#" class="btn btn-primary me-3">Any state</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="shadow-lg">
                    <div class="card bg-dark text-white">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center pt-3">
                                <p class="card-text px-3">Total Products</p>
                                <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" class="pe-3" />
                            </div>
                            <div class="d-flex justify-content-between pb-3">
                                <h3 class="card-title px-3">300547</h3>
                                <a href="#" class="btn btn-primary me-3">Any state</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API_BASE_URL } from '@/config';
import axios from "axios";

export default {
    name: "AdminCategoryListComponent",
    data() {
        return {
            categoryForm: {
                title: '',
                short_title: '',
                icon: '',
                description: '',
            },
        }
    },
    methods: {
        async saveCategory() {
            const URL = API_BASE_URL + '/api/categories/';
            // const requestConfig = {
            //     url: URL,
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(this.categoryForm),
            // };

            // console.log(requestConfig);

            // try {
            //     // console.log('Try');
            //     const response = await axios.post(
            //         URL,
            //         JSON.stringify(this.categoryForm),
            //         {
            //             headers: {
            //                 'Content-Type': 'application/json',
            //             }
            //         },
            //     )
            // } catch (error) {
            //     // Handle errors gracefully
            //     console.error('Error saving category:', error);
            //     // Display appropriate error messages to the user
            // }
            await axios.post(
                URL,
                JSON.stringify(this.categoryForm),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    }
                },
            ).then(response => {
                console.log('Success', response);
            }).catch(error => {
                // console.log('Failed', error);
                console.log('Failed');
                console.log(error.response.status);
                // console.log(error.response.error);
                if (error.response.status === 401) {
                    console.log('Unauthorized');
                    console.log('Obtain new access Token, and self hit again.');
                }
            })
        },
    }
}
</script>

<style scoped></style>
