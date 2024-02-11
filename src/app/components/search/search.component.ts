import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  id:number;
  expenses: Expense[]= [];
  constructor(private expenseService: ExpenseService,
    private router:Router){}
  ngOnInit(): void {
      
  }
  onSubmit(id:number){
    this.expenseService.getExpenseById(id).subscribe(
      data=> {
        console.log(data)
      }
    )
  }
}
