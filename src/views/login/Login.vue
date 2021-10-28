<template>
  <div
    class="d-flex justify-center align-center"
    style="height: 100%;"
  >
    <v-card
      style="width: 100%"
      max-width="400"
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
          @click="submit"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data: () => ({
    form: {
      email: '',
      password: '',
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
    submit() {
      if (this.$refs.loginForm.validate()) {
        console.log('submit!');
      } else {
        this.$toast.error('check');
      }
    },
  },
};
</script>
