import { ICar } from "../../interfaces/ICar";

export const mock: ICar = {
  model: 'McLaren Senna',
  year: 2018,
  color: 'blue',
  buyValue: 750000,
  seatsQty: 2,
  doorsQty: 2
};

export const mockId = {
  _id: '21marco1960com6marco2018',
  model: 'McLaren Senna',
  year: 2018,
  color: 'blue',
  buyValue: 750000,
  seatsQty: 2,
  doorsQty: 2
};

export const mockOneDoor: ICar = {
  model: 'McLaren Senna',
  year: 2018,
  color: 'blue',
  buyValue: 750000,
  seatsQty: 2,
  doorsQty: 1
};

export const mockOneSeat: ICar = {
  model: 'McLaren Senna',
  year: 2018,
  color: 'blue',
  buyValue: 750000,
  seatsQty: 1,
  doorsQty: 2
};

export const mockUpdate = {
  _id: '21marco1960com6marco2018',
  model: 'McLaren Senna',
  year: 2018,
  color: 'red',
  buyValue: 1000000,
  seatsQty: 2,
  doorsQty: 2
};