import { Request, Response } from 'express';
// import CarService from '../services/CarService';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class CarController {
  private _service: IModel<ICar>;

  constructor(service: IModel<ICar>) {
    this._service = service;
  }

  public async read(
    _req: Request,
    res: Response<ICar[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<ICar | null>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async create(
    req: Request & { body: ICar },
    res: Response<ICar>,
  ) {
    const { body } = req;
    const results = await this._service.create(body);
    return res.status(201).json(results);
  }

  public async update(
    req: Request,
    res: Response<ICar | null>,
  ) {
    const result = await this._service.update(req.params.id, req.body);
    return res.status(200).json(result);
  }

  public async delete(
    req: Request,
    res: Response<ICar | null>,
  ) {
    const result = await this._service.delete(req.params.id);
    return res.status(204).json(result);
  }
}