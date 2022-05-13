import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'http://www.boredapi.com/api/activity/';

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get(this.url)
  }
}
