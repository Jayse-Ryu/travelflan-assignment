<template>
  <v-app id="viewApp">
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
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
html {
  background-color: #212121;
}

#viewApp {
  min-width: 360px;
}
</style>
