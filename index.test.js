const request = require('supertest');
const { app } = require('./app');

describe('/test105', () => {
  it('returns `Hello World!`', async () => {
    const data = await request(app).get('/test105');
    expect(data.statusCode).toBe(200);
    expect(data.body.message).toBe('Hello World!');
  });
});