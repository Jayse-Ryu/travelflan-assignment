// import client from './client';

export default {
  async loginUser(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.email === 'demo@test.com' && data.password === '1234') {
          const demoUser = {
            uuid: 'd3m0',
            first_name: 'Demo',
            last_name: 'User',
            email: 'demo@test.com',
            is_staff: false,
          };
          resolve(demoUser);
        } else {
          reject(new Error('Please enter the correct values in the fields.'));
        }
      }, Math.floor(Math.random() * 1000));
    });
  },

  async currentUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const demoUser = {
          uuid: 'd3m0',
          first_name: 'Demo',
          last_name: 'User',
          email: 'demo@test.com',
          is_staff: false,
          meta_data: null,
        };
        resolve(demoUser);
      }, Math.floor(Math.random() * 10));
    });
  },
};
