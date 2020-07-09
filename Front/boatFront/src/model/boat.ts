import { Deserializable } from './deserializable';

export class Boat implements Deserializable{

  public id: number;
  public name: string;
  public description: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

}
