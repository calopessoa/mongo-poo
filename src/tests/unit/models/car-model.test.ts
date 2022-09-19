import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import { mock, mockId, mockUpdate } from '../mockCar';
import Car from '../../../models/CarModel';
import CustomError from '../../../helpers/CustomError';
const { expect } = chai;

describe('CarModel Tests', () => {
  const model = new Car();

  before(() => {
    sinon.stub(Model, 'create').resolves(mockId);
    sinon.stub(Model, 'findOne').resolves(mockId);
    sinon.stub(Model, 'find').resolves([mockId]);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(mockUpdate);
    sinon.stub(Model, 'findByIdAndRemove').resolves();
  });

  after(() => {
    sinon.restore();
  });

  describe('When creating a car SUCCESSFULLY occurs', () => {
    it('returns the expected created car', async () => {
      const newCar = await model.create(mock);
      expect(newCar).to.be.equal(mockId);
    });
  });

  describe('When FIND-method a car SUCCESSFULLY occurs', () => {
    it('is possible to SUCCESSFULLY list all created cars', async () => {
      const allCars = await model.read();
      expect(allCars).to.be.deep.equal([mockId]);
    });

    it('is possible to SUCCESSFULLY GET a car by its ID', async () => {
      const mcLaren = await model.readOne(mockId._id);
      expect(mcLaren).to.be.deep.equal(mockId);
    });

    it('returns an error when entering an invalid ID', async () => {
			try {
				await model.readOne(mockId._id);
			} catch (error) {
        expect(error).to.be.instanceof(CustomError);
			}
		});
  });

  describe('When UPDATE-method a car SUCCESSFULLY occurs', () => {
    it('is possible to SUCCESSFULLY update stats of a car', async () => {
      const refreshCar = await model.update(mockId._id, mockUpdate);
      expect(refreshCar).to.be.equal(mockUpdate);
    });
  });

  describe('When DELETE-method a car SUCCESSFULLY occurs', () => {
    it('is possible to SUCCESSFULLY delete a car', async () => {
      const refreshCar = await model.delete(mockId._id);
      expect(refreshCar).to.be.equal(undefined);
    });
  });
});