const request = require('supertest');
const app = require('../server.js');

describe('User API', () => {
    it('should return a list of users', async () => {
        const res = await request(app).get('/api/v1/users');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('users');
    });
})

