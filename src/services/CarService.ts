import { IModel } from '../interfaces/IModel';
import { ICar, car } from '../interfaces/ICar';
import CustomError from '../helpers/CustomError';

const notFound = 'Object not found';

export default class CarService implements IModel<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(_id: string): Promise<ICar | null> {
    const oneCar = await this._car.readOne(_id);
    if (!oneCar) throw new CustomError(404, notFound);
    return oneCar;
  }

  public async create(obj: ICar): Promise<ICar> {
    const newCar = car.safeParse(obj);

    if (!newCar.success) {
      throw new CustomError(400, 'Invalid data');
    }
    return this._car.create(obj);
  }

  public async update(_id: string, obj: ICar): Promise<ICar | null> {
    const updatedCar = car.safeParse(obj);
    if (!updatedCar.success) throw new CustomError(400, 'Object not found');
    await this.readOne(_id);
    return this._car.update(_id, obj);
  }

  public async delete(_id: string): Promise<ICar | null> {
    const deleteCar = await this._car.readOne(_id);
    if (!deleteCar) throw new CustomError(404, notFound);
    return this._car.delete(_id);
  }
}