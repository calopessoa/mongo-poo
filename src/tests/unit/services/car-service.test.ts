// template para criação dos testes de cobertura da camada de service

import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { mock, mockId, mockOneDoor, mockOneSeat, mockUpdate } from '../mockCar';
import CustomError from '../../../helpers/CustomError';
const { expect } = chai;

describe('CarService Tests', () => {
  const model = new Car();
  const carService = new CarService(model);

  describe('POST method, on "create" a car into the db', () => {

    describe('When creating a car SUCCESSFULLY occurs', () => {
      before(async () => {
        sinon
          .stub(model, 'create')
          .resolves(mockId);
      });

      after(()=>{
        sinon.restore();
      })

      it('returns the expected created car', async () => {
        const result = await carService.create(mock);

        expect(result).to.be.eqls(mockId);
      });
    });

    describe('When the car creation FAILS', () => {

      describe('Trying with an empty object', () => {

        it('throws an error', async () => {
          try {
            await carService.create({} as any);
          } catch(err) {
            expect(err).to.be.instanceOf(CustomError);
          }
        });
      });

      describe('When trying to create a car with less than 2 seats', () => {

        it('throws an error', async () => {
          try {
            await carService.create(mockOneSeat);
          } catch(err) {
            expect(err).to.be.instanceof(CustomError);
          }
        });
      });

      describe('When trying to create a car with less than 2 doors', () => {

        it('throws an error', async () => {
          try {
            await carService.create(mockOneDoor);
          } catch(err) {
            expect(err).to.be.instanceof(CustomError);
          }
        });
      });
    });
  });

  describe('GET method, on "read" all cars from db', () => {
    before(() => {
      sinon.stub(model, 'read')
      .onCall(0).resolves([mockId])
      .onCall(1).resolves([]);
    });

    after(() => {
      sinon.restore();
    });

    it('is possible to SUCCESSFULLY list all created cars', async () => {
      const result = await carService.read();

      expect(result).to.be.eqls([mockId]);
    });

    it('returns an empty list in case of no cars', async () => {
      const result = await carService.read();

      expect(result).to.be.eqls([]);
    });
  });

  describe('GET method, on "read" a specific car from db', () => {
      before(() => {
        sinon.stub(model, 'readOne').resolves(mockId);
      });

      after(() => {
        sinon.restore();
      });

      it('returns SUCCESSFULLY a car from db by its ID', async () => {
        const result = await carService.readOne(mockId._id);

        expect(result).to.be.eqls(mockId);
      });

    describe('When trying to return a car by its ID FAILS', () => {
      describe('ID is less than 24 hexadecimal characters', () => {

        it('throws an error', async () => {
          try {
            await carService.readOne('In1989SennaTrueChampion');
          } catch(err) {
            expect(err).to.be.instanceof(CustomError);
          }
        });
      });
    });
  });

  describe('PUT method, on "update" a car from db', () => {
    before(() => {
      sinon.stub(model, 'readOne')
      .onCall(0).resolves(mockId)
      sinon.stub(model, 'update')
      .onCall(0).resolves(mockUpdate)
    });

    after(() => {
      sinon.restore();
    });

    it('is possible to SUCCESSFULLY update a car', async () => {
      const result = await carService.update(mockId._id, mockUpdate);
      expect(result).to.be.eqls(mockUpdate);
    });

    it('throws an error', async () => {
      try {
        await carService.update(mockId._id, {} as any);
      } catch(err) {
        expect(err).to.be.instanceof(CustomError);
      }
    });
  });

  describe('DELETE method, on "delete" a car from db', () => {
    before(() => {
      sinon.stub(model, 'readOne')
      .onCall(0).resolves(mockId)
      sinon.stub(model, 'delete')
      .onCall(1).resolves()
      sinon.stub(model, 'read')
      .onCall(2).resolves([mock])
    });

    after(() => {
      sinon.restore();
    });

    it('is possible to SUCCESSFULLY delete a car', async () => {
      const result = await carService.delete(mockId._id);
      expect(result).to.be.eqls(undefined);
    });

    it('throws an error', async () => {
      try {
        await carService.delete('In1989SennaTrueChampion');
      } catch(err) {
        expect(err).to.be.instanceof(CustomError);
      }
    });
  });
});