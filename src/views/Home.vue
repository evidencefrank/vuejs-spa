<template>
  <div class="container">
    <div class="mt-5">
      <h5 class="text-center">Cryptocurrency Prices by Market Cap</h5>
    </div>
    <div class="mt-3">
      <CoinTable />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CoinTable from "@/components/CoinTable.vue";

export default {
  name: "Home",
  components: {
    CoinTable,
  },
};
</script>

<style lang="scss" scoped>
.home {
  //height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
}
</style>
