const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/admin', () => {
    it('responds with 200 status and application json content type', () => request(server)
      .get('/admin')
      .expect('Content-Type', /application\/json/)
      .expect(200));

    it('posts', ())
  }),
})