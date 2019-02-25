/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Student } from '../../models/Student';
import { Courses } from '../../models/Courses';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Student: Student,
    Courses: Courses,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
