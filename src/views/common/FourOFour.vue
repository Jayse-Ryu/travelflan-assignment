<template>
  <div
    class="d-flex justify-center align-center"
    style="height: 100%;"
  >
    <div>
      <h2
        class="text-center"
        style="width: 100%;"
      >
        404
      </h2>

      <div>
        <v-btn
          color="primary"
          small
          @click="goToLogin"
        >
          Go to login page
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourOFour',

  methods: {
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style scoped>

</style>
