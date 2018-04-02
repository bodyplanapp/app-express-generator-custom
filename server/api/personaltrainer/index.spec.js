'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var personaltrainerCtrlStub = {
  index: 'personaltrainerCtrl.index',
  show: 'personaltrainerCtrl.show',
  create: 'personaltrainerCtrl.create',
  upsert: 'personaltrainerCtrl.upsert',
  patch: 'personaltrainerCtrl.patch',
  destroy: 'personaltrainerCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var personaltrainerIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './personaltrainer.controller': personaltrainerCtrlStub
});

describe('Personaltrainer API Router:', function() {
  it('should return an express router instance', function() {
    personaltrainerIndex.should.equal(routerStub);
  });

  describe('GET /api/personaltrainers', function() {
    it('should route to personaltrainer.controller.index', function() {
      routerStub.get
        .withArgs('/', 'personaltrainerCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/personaltrainers/:id', function() {
    it('should route to personaltrainer.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'personaltrainerCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/personaltrainers', function() {
    it('should route to personaltrainer.controller.create', function() {
      routerStub.post
        .withArgs('/', 'personaltrainerCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/personaltrainers/:id', function() {
    it('should route to personaltrainer.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'personaltrainerCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/personaltrainers/:id', function() {
    it('should route to personaltrainer.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'personaltrainerCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/personaltrainers/:id', function() {
    it('should route to personaltrainer.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'personaltrainerCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
