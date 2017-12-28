import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class LobsterService {
  constructor(private http:Http) {

  }

  private url:string = "http://localhost:4200/assets/data.json";
  getMembers() {
    return this.http.get(this.url).map((response: Response) => response.json());
  }
}