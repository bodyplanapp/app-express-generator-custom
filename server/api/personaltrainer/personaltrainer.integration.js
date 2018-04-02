'use strict';

var app = require('../..');
import request from 'supertest';

var newPersonaltrainer;

describe('Personaltrainer API:', function() {
  describe('GET /api/personaltrainers', function() {
    var personaltrainers;

    beforeEach(function(done) {
      request(app)
        .get('/api/personaltrainers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          personaltrainers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      personaltrainers.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/personaltrainers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/personaltrainers')
        .send({
          name: 'New Personaltrainer',
          info: 'This is the brand new personaltrainer!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newPersonaltrainer = res.body;
          done();
        });
    });

    it('should respond with the newly created personaltrainer', function() {
      newPersonaltrainer.name.should.equal('New Personaltrainer');
      newPersonaltrainer.info.should.equal('This is the brand new personaltrainer!!!');
    });
  });

  describe('GET /api/personaltrainers/:id', function() {
    var personaltrainer;

    beforeEach(function(done) {
      request(app)
        .get(`/api/personaltrainers/${newPersonaltrainer._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          personaltrainer = res.body;
          done();
        });
    });

    afterEach(function() {
      personaltrainer = {};
    });

    it('should respond with the requested personaltrainer', function() {
      personaltrainer.name.should.equal('New Personaltrainer');
      personaltrainer.info.should.equal('This is the brand new personaltrainer!!!');
    });
  });

  describe('PUT /api/personaltrainers/:id', function() {
    var updatedPersonaltrainer;

    beforeEach(function(done) {
      request(app)
        .put(`/api/personaltrainers/${newPersonaltrainer._id}`)
        .send({
          name: 'Updated Personaltrainer',
          info: 'This is the updated personaltrainer!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedPersonaltrainer = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPersonaltrainer = {};
    });

    it('should respond with the updated personaltrainer', function() {
      updatedPersonaltrainer.name.should.equal('Updated Personaltrainer');
      updatedPersonaltrainer.info.should.equal('This is the updated personaltrainer!!!');
    });

    it('should respond with the updated personaltrainer on a subsequent GET', function(done) {
      request(app)
        .get(`/api/personaltrainers/${newPersonaltrainer._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let personaltrainer = res.body;

          personaltrainer.name.should.equal('Updated Personaltrainer');
          personaltrainer.info.should.equal('This is the updated personaltrainer!!!');

          done();
        });
    });
  });

  describe('PATCH /api/personaltrainers/:id', function() {
    var patchedPersonaltrainer;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/personaltrainers/${newPersonaltrainer._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Personaltrainer' },
          { op: 'replace', path: '/info', value: 'This is the patched personaltrainer!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedPersonaltrainer = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedPersonaltrainer = {};
    });

    it('should respond with the patched personaltrainer', function() {
      patchedPersonaltrainer.name.should.equal('Patched Personaltrainer');
      patchedPersonaltrainer.info.should.equal('This is the patched personaltrainer!!!');
    });
  });

  describe('DELETE /api/personaltrainers/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/personaltrainers/${newPersonaltrainer._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when personaltrainer does not exist', function(done) {
      request(app)
        .delete(`/api/personaltrainers/${newPersonaltrainer._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
