<template>
    <div class="card">
        <img v-if="profileData.picture" :src="`${API_BASE_URL}${profileData.picture}`" :alt="profileData.name"
            class="card-img-top" height="250" width="250" />
        <img v-else src="@/assets/loading.gif" alt="Static Photo" class="card-img-top" height="250" width="250">
        <h5 class="card-title">{{ profileData.name }}</h5>
        <div class="card-body">
            <p class="card-text">
                <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
                {{ profileData.email }}
            </p>
            <p class="card-text">
                <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
                {{ profileData.username }}
            </p>
            <p class="card-text">
                <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
                {{ profileData.role }}
            </p>
        </div>
    </div>
</template>

<script>
import { API_BASE_URL } from '@/config';

export default {
    name: 'AdminProfileCardComponent',
    props: {
        profileData: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            API_BASE_URL: API_BASE_URL,
        }
    },
}
</script>