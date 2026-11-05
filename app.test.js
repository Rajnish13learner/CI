const request = require('supertest');
const { describe, it, expect } = require('@jest/globals');
const app = require('./app');

describe('GET /', () => {
    it(`hello world`, async () => {
        const res = await request(app).get('/').expect(200);

        expect(res.text).toBe('Works on my machine.');
    });
});
