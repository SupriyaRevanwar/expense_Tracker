import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../models/expense';
import { Observable} from 'rxjs'
import { map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseURL="http://localhost:8080/expenses";
  constructor(private httpClient: HttpClient) { }

  getExpenses(): Observable<Expense[]>{
    return this.httpClient.get<Expense[]>(this.baseURL).pipe(
      map(reponse => reponse)
    )
  }

  addExpense(expense:Expense):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,expense);
  }

  getExpenseById(id:number):Observable<Expense>{
    return this.httpClient.get<Expense>(`${this.baseURL}/${id}`).pipe(
      map(response => response)
    )
  }

  updateExpense(id:number,expense:Expense):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,expense);
  }

  deletExpense(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  deleteAll():Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`);
  }

}
