const request = require('supertest');
const app = require('../index'); // Adjust the path as necessary

describe('GET /number', () => {
  it('should return the current number', async () => {
    const response = await request(app).get('/number');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('number');
  });
});

describe('POST /update', () => {
  it('should increment the number', async () => {
    const response = await request(app).post('/update');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('number');
  });
});