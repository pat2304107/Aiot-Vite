<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <div class="main">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.main {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: left top;
  background: #01161e;
}
</style>
