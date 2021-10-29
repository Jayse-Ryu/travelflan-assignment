<template>
  <div>
    <Header />
    <v-main class="pt-12">
      <v-container class="pt-8">
        <Albums />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/views/dashboard/components/Header.vue';
import Albums from '@/views/dashboard/components/Albums.vue';

export default {
  name: 'Dashboard',

  components: {
    Header,
    Albums,
  },

  computed: {
    ...mapState({
      user: (state) => state.account.user,
    }),
  },
};
</script>

<style scoped>

</style>
