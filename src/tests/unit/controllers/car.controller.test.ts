import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { mock, mockId, mockUpdate } from '../mockCar';
import CustomError from '../../../helpers/CustomError';
import { Request, Response } from 'express';
const { expect } = chai;

describe('CarController Tests', () => {
  const model = new Car();
  const carService = new CarService(model);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(mockId);
    sinon.stub(carService, 'read').resolves([mock])
    sinon.stub(carService, 'readOne').resolves(mockId);
    sinon.stub(carService, 'update').resolves(mockUpdate);
    sinon.stub(carService, 'delete').resolves();

    res.json = sinon.stub().returns(req);
    res.status = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('POST method, on "create" a car into the db', () => {
    it('returns status 201', async () => {
      req.body = mock;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(mockId)).to.be.true;
    });
  });

  describe('GET method, on "read" all cars from db', () => {
    it('returns status 200', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(mockId)).to.be.true;
    });
  });

  describe('ReadOne Car', () => {
    it('returns status 200', async () => {
      req.params = { id: mockId._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(mockId)).to.be.true;
    });
  });

  describe('PUT method, on "update" a car from the db', () => {
    describe('Updates all or some elements of a single car', () => {
      it('returns status 200', async () => {
        req.params = { id: mockId._id };
        await carController.update(req, res);

        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
        expect((res.json as sinon.SinonStub).calledWith(mockUpdate)).to.be.true;
      });
    });
  });

  describe('DELETE method, on "delete" a specific car from the db', () => {
    it('returns status 204', async () => {
      req.params = { id: mockId._id };
      await carController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith()).to.be.true;
    });
  });
});
