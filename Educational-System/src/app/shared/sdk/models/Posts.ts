/* tslint:disable */

declare var Object: any;
export interface PostsInterface {
  "topic": string;
  "rating": number;
  "posts"?: Array<any>;
  "id"?: any;
}

export class Posts implements PostsInterface {
  "topic": string;
  "rating": number;
  "posts": Array<any>;
  "id": any;
  constructor(data?: PostsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Posts`.
   */
  public static getModelName() {
    return "Posts";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Posts for dynamic purposes.
  **/
  public static factory(data: PostsInterface): Posts{
    return new Posts(data);
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
      name: 'Posts',
      plural: 'Posts',
      path: 'Posts',
      idName: 'id',
      properties: {
        "topic": {
          name: 'topic',
          type: 'string'
        },
        "rating": {
          name: 'rating',
          type: 'number',
          default: 0
        },
        "posts": {
          name: 'posts',
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
