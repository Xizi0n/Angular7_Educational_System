/* tslint:disable */

declare var Object: any;
export interface CoursesInterface {
  "name": string;
  "icon": string;
  "lessons": Array<any>;
  "id"?: any;
}

export class Courses implements CoursesInterface {
  "name": string;
  "icon": string;
  "lessons": Array<any>;
  "id": any;
  constructor(data?: CoursesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Courses`.
   */
  public static getModelName() {
    return "Courses";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Courses for dynamic purposes.
  **/
  public static factory(data: CoursesInterface): Courses{
    return new Courses(data);
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
      name: 'Courses',
      plural: 'Courses',
      path: 'Courses',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "icon": {
          name: 'icon',
          type: 'string'
        },
        "lessons": {
          name: 'lessons',
          type: 'Array&lt;any&gt;'
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
