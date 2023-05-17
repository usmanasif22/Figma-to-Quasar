<template>
  <div id="q-app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",
};
</script>
<style scoped></style>
