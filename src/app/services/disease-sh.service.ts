import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiseaseShService {
  private apiUrl = 'https://corona.lmao.ninja';

  constructor(private http: HttpClient) { }

  getGlobalStats() {
    return this.http.get(this.apiUrl + '/v3/covid-19/all');
  }
}
