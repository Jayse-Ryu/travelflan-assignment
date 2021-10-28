import Vue from 'vue';
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib';
import VuetifyToast from 'vuetify-toast-snackbar';

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon,
  },
});

const vuetify = new Vuetify({
  icons: { iconfont: 'mdiSvg' },
});

Vue.use(VuetifyToast, {
  $vuetify: vuetify.framework,
  x: 'left',
});

export default vuetify;
