<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="albums"
      :items-per-page="5"
      class="elevation-1"
      @click:row="showAlbumDetail"
    >
      <template #top>
        <div class="d-flex justify-space-between py-2 px-3">
          <h4>Album List</h4>

          <v-btn
            color="primary"
            class="text-capitalize"
            small
            @click="showAlbumCreator"
          >
            Create Album
          </v-btn>
        </div>
      </template>

      <template #item.delete="{ item }">
        <v-btn
          color="error"
          icon
          @click.stop="deleteAlbum(item)"
        >
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <AlbumEditor
      :show.sync="editorDialog"
      :albums.sync="albums"
      :selected-album.sync="selectedAlbum"
    />

    <AlbumRemover
      :show.sync="deleteDialog"
      :albums.sync="albums"
      :selected-album.sync="selectedAlbum"
    />
  </div>
</template>

<script>
import albumApi from '@/api/album/album';
import AlbumEditor from '@/views/dashboard/components/widgets/AlbumEditor.vue';
import AlbumRemover from '@/views/dashboard/components/widgets/AlbumRemover.vue';

export default {
  name: 'Albums',

  components: {
    AlbumEditor,
    AlbumRemover,
  },

  data: () => ({
    loading: false,
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Title', value: 'title' },
      { text: 'User', value: 'userId' },
      { text: '', value: 'delete', width: 80 },
    ],
    albums: [],
    editorDialog: false,
    deleteDialog: false,
    selectedAlbum: null,
  }),

  mounted() {
    this.getAlbums();
  },

  methods: {
    async getAlbums() {
      try {
        this.loading = true;
        this.albums = await albumApi.getAlbums();
      } catch (err) {
        console.log(err);
        this.$toast.error('An error occurred during getting the album list');
      } finally {
        this.loading = false;
      }
    },

    showAlbumDetail(album) {
      this.selectedAlbum = album;
      this.editorDialog = true;
    },

    showAlbumCreator() {
      this.selectedAlbum = { id: null, title: null, userId: null };
      this.editorDialog = true;
    },

    deleteAlbum(album) {
      this.selectedAlbum = album;
      this.deleteDialog = true;
    },
  },
};
</script>

<style scoped>

</style>
