const request = require('supertest');
const app = require('../server');

describe('Test the root path', function() {
  test('It should response the GET method', function(done) {
    request(app).get('/').then(function(response){
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('Test the features path', function() {
  test('It should response the GET method', function(done) {
    request(app).get('/features').then(function(response){
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('Test the about path', function() {
  test('It should response the GET method', function(done) {
    request(app).get('/about').then(function(response){
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('Test the 404 path', function() {
  test('It should response the GET method', function(done) {
    request(app).get('/does-not-exist').then(function(response){
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});