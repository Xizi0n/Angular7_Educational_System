import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompileService {

  constructor(private http: HttpClient) { }

  compile(pcode, planguage) {
    const body = {
      code: pcode,
      language: planguage
    };
    return this.http.post(environment.compileUrl + '/compile', body );
  }
}
