<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <a href="#" class="navbar-brand">
      <img
        src="@/assets/logoipsum-logo-2.svg"
        alt="Application Logo"
        class="d-inline-block align-top"
      />
      <span class="visually-hidden">Application Name</span>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#toggleMobileMenu"
      aria-controls="toggleMobileMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="toggleMobileMenu">
      <ul class="text-center navbar-nav ms-auto">
        <li>
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li>
          <router-link to="/contact-us" class="nav-link"
            >Contact Us</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav-link:hover {
  color: #60a5fa !important;
}
</style>
