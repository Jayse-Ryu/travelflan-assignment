<template>
  <v-dialog
    v-model="showLocal"
    max-width="700"
    persistent
  >
    <v-card>
      <v-card-title class="justify-space-between">
        Delete Album
        <v-btn
          icon
          small
          @click="showLocal = false"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        Are you sure you want to delete this album?
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn
          color="error"
          small
          @click="deleteAlbum"
        >
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import dialog from '@/mixins/dialog';

export default {
  name: 'AlbumRemover',

  mixins: [
    dialog,
  ],

  props: {
    albums: {
      type: Array,
      default: null,
    },

    selectedAlbum: {
      type: Object,
      default: null,
    },
  },

  data: () => ({
    loading: false,
  }),

  computed: {
    localAlbumList: {
      get() {
        return this.albums;
      },
      set(newValue) {
        this.$emit('albums', newValue);
      },
    },
  },

  methods: {
    deleteAlbum() {
      try {
        this.loading = true;
        const targetIndex = this.localAlbumList.findIndex((el) => el.id === this.selectedAlbum.id);
        this.localAlbumList.splice(targetIndex, 1);
        this.$toast.success('The album is successfully deleted');
        this.showLocal = false;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>

</style>
