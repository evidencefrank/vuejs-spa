<template>
  <div class="container d-flex flex-column h-100">
    <header>
      <app-header />
    </header>

    <main class="flex-shrink-0">
      <router-view />
    </main>

    <footer class="footer mt-auto">
      <app-footer />
    </footer>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
</style>
