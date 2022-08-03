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

    it('should update a user', async () => {
        const res = await request(app).put('/api/v1/users/1').send({
            firstName: 'John2',
            lastName: 'Doe2',
            email: 'johndoe2@gmail.com',
            password: 'password2',
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('user');
    })

    it('should delete a user', async () => {
        const res = await request(app).delete('/api/v1/users/1');
        expect(res.statusCode).toEqual(204);
    })
    it('should return an error if user does not exist', async () => {
        const res = await request(app).delete('/api/v1/users/100');
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('error');
    })

    

})

