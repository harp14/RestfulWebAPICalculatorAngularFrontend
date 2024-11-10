// calculator.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private httpClient = inject(HttpClient);

  constructor() {}

  fetchData(selectedOption: string, body: any) {
    return this.httpClient.post<any>(`http://localhost:5137/Calculator/${selectedOption}`, body);
  }
}