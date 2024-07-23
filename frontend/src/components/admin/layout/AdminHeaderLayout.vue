<template>
  <header class="header" style="height: 100px;">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="input-group me-2 mt-4">
        <input type="text" class="form-control" placeholder="Search">
        <button class="btn btn-outline-light" type="button">Search</button>
      </div>
      <div class="dropdown mt-4">
        <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownProfile"
          data-bs-toggle="dropdown" aria-expanded="false">
          <img src="@/assets/profile.jpg" height="25">
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownProfile">
          <!-- <li><a class="dropdown-item" href="#">Profile</a></li> -->
          <router-link :to="{ name: 'admin-profile' }" class="dropdown-item">
            Profile
          </router-link>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Log out</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AdminHeaderLayout",
};
</script>

<style scoped>
.header {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 119, 255, 0.8),
    rgba(0, 63, 127, 1),
    rgba(0, 119, 255, 0.8) 
  );
}
</style>