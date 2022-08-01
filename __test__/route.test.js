const request = require('supertest');
const app = require('../server.js');

describe('User API', () => {
    it('should return a list of users', async () => {
        const res = await request(app).get('/api/v1/users');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('users');
    });

    it('should show a user', async () => {
        const res = await request(app).get('/api/v1/users/1')
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('user');
    })

    it('should create a user', async () => {
        const res = await request(app).post('/api/v1/users').send({
            firstName: 'John1',
            lastName: 'Doe1',
            email: 'johndoe1@gmail.com',
            password: 'password1',
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('user');
    })
})

