<template>
  <div>
    <v-app-bar
      fixed
      dense
    >
      <div
        class="d-flex justify-space-between"
        style="width: 100%;"
      >
        <div>
          <h3>
            TravelFlan
          </h3>
        </div>

        <div>
          <v-btn
            icon
            small
            class="mx-3"
            @click="darkModeLocal = !darkModeLocal"
          >
            <v-icon>
              mdi-brightness-6
            </v-icon>
          </v-btn>

          <v-btn
            color="secondary"
            small
            @click="requestLogout"
          >
            Logout
          </v-btn>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'Header',

  computed: {
    ...mapState({
      darkMode: (state) => state.displaySettings.darkMode,
    }),

    darkModeLocal: {
      get() {
        return this.darkMode;
      },
      set(newValue) {
        this.setDarkMode(newValue);
      },
    },
  },

  watch: {
    darkMode: {
      immediate: true,
      handler(newValue) {
        this.$vuetify.theme.dark = newValue;
      },
    },
  },

  methods: {
    ...mapActions('account', [
      'logout',
    ]),

    ...mapMutations('displaySettings', [
      'setDarkMode',
    ]),

    async requestLogout() {
      try {
        await this.logout();
        this.$router.push({ name: 'login' });
      } catch (err) {
        this.$toast.error('Error during logging out');
      }
    },
  },
};
</script>

<style scoped>

</style>
