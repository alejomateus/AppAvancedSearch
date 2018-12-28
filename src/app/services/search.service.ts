import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = "http://localhost/davinciapi/public/api/";
  constructor(public router: Router, private http: HttpClient) { 

  }
  public getCities() {
    return this.http.get(`${this.url}cities`);
  }
  public getCrimes() {
    return this.http.get(`${this.url}crimes`);
  }
  public advancedsearch(data) {
    return this.http.post(`${this.url}search`,data);
  }

}
