import client from './client';

export default {
  async getAlbums() {
    const response = await client.get('albums/');
    return response.data;
  },
};
