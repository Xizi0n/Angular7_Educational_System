import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class CompileService {
  constructor(private http: HttpClient) {}

  compile(pcode, planguage) {
    const body = {
      code: pcode,
      language: planguage
    };
    return this.http.post(environment.CompilerUrl, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
  }

  escapeSpecials(code) {
    let result = "";
    for (let char of code) {
      if (char.charCodeAt(0) === 34) {
        console.log("found special");
        char = "\\" + char;
        console.log(char);
      }
      result += char;
    }
    console.log("Result");
    console.log(result);
    return result;
  }
}
