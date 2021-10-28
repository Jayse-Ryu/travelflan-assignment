<template>
  <v-app id="viewApp">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#app {
  min-width: 360px;
}
</style>
