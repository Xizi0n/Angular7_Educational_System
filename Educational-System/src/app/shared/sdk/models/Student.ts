/* tslint:disable */

declare var Object: any;
export interface StudentInterface {
  "name": string;
  "h_id": string;
  "id"?: any;
}

export class Student implements StudentInterface {
  "name": string;
  "h_id": string;
  "id": any;
  constructor(data?: StudentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Student`.
   */
  public static getModelName() {
    return "Student";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Student for dynamic purposes.
  **/
  public static factory(data: StudentInterface): Student{
    return new Student(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Student',
      plural: 'Students',
      path: 'Students',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "h_id": {
          name: 'h_id',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
