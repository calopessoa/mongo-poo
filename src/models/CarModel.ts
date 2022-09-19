import { model as mongooseCreateModel } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';
import carSchema from '../interfaces/carSchema';

export default class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carSchema)) {
    super(model);
  }
}
