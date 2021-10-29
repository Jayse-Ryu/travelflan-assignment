<template>
  <v-dialog
    v-model="showLocal"
    max-width="700"
    persistent
  >
    <v-card :loading="loading">
      <v-card-title>
        Album {{ createMode ? 'Creator' : 'Editor' }}
      </v-card-title>
      <v-card-text>
        <v-form ref="albumForm">
          <template v-if="!createMode">
            <v-text-field
              v-model="localAlbum.id"
              label="ID"
              readonly
              disabled
            />
          </template>
          <v-text-field
            v-model="localAlbum.title"
            label="Title"
            :rules="rules.title"
          />
          <v-text-field
            v-model="localAlbum.userId"
            label="User"
            type="number"
            :rules="rules.user"
          />
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn
          :disabled="loading"
          @click="showLocal = false"
        >
          Cancel
        </v-btn>
        <v-btn
          v-if="!createMode"
          color="primary"
          :loading="loading"
          @click="save"
        >
          Save
        </v-btn>
        <v-btn
          v-if="createMode"
          color="primary"
          :loading="loading"
          @click="create"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import dialog from '@/mixins/dialog';

export default {
  name: 'AlbumEditor',

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
    rules: {
      title: [
        (v) => !!v || 'Title is required',
      ],
      user: [
        (v) => /^\d+$/.test(v) || 'User must be number',
        (v) => !!v || 'User id is required',
      ],
    },
  }),

  computed: {
    createMode() {
      return !this.selectedAlbum?.id;
    },

    localAlbumList: {
      get() {
        return this.albums;
      },
      set(newValue) {
        this.$emit('albums', newValue);
      },
    },

    localAlbum: {
      get() {
        return { ...this.selectedAlbum };
      },
      set(newValue) {
        this.$emit('selectedAlbum', newValue);
      },
    },
  },

  watch: {
    showLocal: {
      immediate: true,
      handler(newValue) {
        if (newValue && this.$refs.albumForm) {
          this.$refs.albumForm.resetValidation();
        }
      },
    },
  },

  methods: {
    async save() {
      if (this.$refs.albumForm.validate()) {
        try {
          this.loading = true;
          const targetIndex = this.albums.findIndex((el) => el.id === this.localAlbum.id);
          this.localAlbumList.splice(targetIndex, 1, this.localAlbum);
          this.$toast.success('Data successfully saved.');
          this.showLocal = false;
        } catch (err) {
          console.log(err);
        } finally {
          this.loading = false;
        }
      } else {
        this.$toast.error('Make sure filling the required fields');
      }
    },

    async create() {
      if (this.$refs.albumForm.validate()) {
        try {
          this.loading = true;
          // const targetIndex = this.albums.findIndex((el) => el.id === this.localAlbum.id);
          // this.localAlbumList.splice(targetIndex, 1, this.localAlbum);
          const nextId = Math.max(...this.localAlbumList.map((el) => el.id));
          this.localAlbum.id = nextId + 1;
          this.localAlbumList.unshift(this.localAlbum);
          this.$toast.success('Data successfully saved.');
          this.showLocal = false;
        } catch (err) {
          console.log(err);
        } finally {
          this.loading = false;
        }
      } else {
        this.$toast.error('Make sure filling the required fields');
      }
    },
  },
};
</script>

<style scoped>

</style>
