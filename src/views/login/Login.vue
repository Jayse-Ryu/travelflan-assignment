<template>
  <div
    class="d-flex justify-center align-center"
    style="height: 100%; background: cadetblue;"
  >
    <v-card
      style="width: 100%"
      max-width="400"
      :loading="loading"
      light
    >
      <v-card-title>
        Login
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-form
            ref="loginForm"
            style="width: 100%;"
            @submit.prevent="submit()"
          >
            <v-col cols="12">
              <v-text-field
                v-model="form.email"
                label="Email"
                prepend-icon="mdi-email"
                dense
                :rules="rules.email"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                prepend-icon="mdi-lock"
                dense
                :rules="rules.password"
                @keyup.enter="submit()"
              />
            </v-col>
          </v-form>
        </v-row>
      </v-card-text>

      <v-card-actions
        class="justify-end"
      >
        <v-btn
          color="primary"
          :loading="loading"
          @click="submit"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',

  data: () => ({
    loading: false,
    form: {
      email: 'demo@test.com',
      password: '1234',
    },
    rules: {
      email: [
        (v) => !!v || 'Password required',
        (v) => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
      ],
      password: [
        (v) => !!v || 'Password required',
      ],
    },
  }),

  methods: {
    ...mapActions('account', [
      'doUserLogin',
    ]),

    async submit() {
      if (this.$refs.loginForm.validate()) {
        try {
          this.loading = true;
          await this.doUserLogin(this.form);
          this.$router.push({ name: 'dashboard' });
        } catch (err) {
          console.log('Login error', err);
          this.$toast.error(err);
        } finally {
          this.loading = false;
        }
      } else {
        this.$toast.error('Please check the fields');
      }
    },
  },
};
</script>
