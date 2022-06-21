const assert = require('assert').strict;
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server');


describe('chequeos', () => {

    before(() => {
        console.log('Comienzo del test');
    });
    after(() => {
        console.log('Fin del test');
    });

    describe('GET', ()=>{
        it('deberia retornar status 200', done => {
            request(app)
            .get('/products/all')
            .end((err, res) => {
                assert(res.status === 200);
            });
            done();
        })
    })

    describe('GET', ()=>{
        it('deberia devolver status 200', done => {
            request(app)
            .get('/login')
            .end((err, res) => {
                assert(res.status === 200);
            });
            done();
        })
    })

    describe('GET', ()=>{
        it('deberia devolver status 404', done => {
            request(app)
            .get('/*')
            expect(404);
            done();
        })
    })

    describe('GET', ()=>{
        it('deberia devolver status 200', done => {
            request(app)
            .post('/login')
            .end((err, res) => {
                assert(res.status === 200);
            });
            done();
        })
    })

    describe('POST', ()=>{
        it('deberia devolver status 201', done=>{
            const data = {
                username:"Otto",
                password: 123,
                email:"otto@mail.com"
            };
            request(app)
            .post('/register')
            .send(data)
            expect(201);
            done();
        })
    })

})
