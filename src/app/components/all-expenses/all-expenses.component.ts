import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-all-expenses',
  templateUrl: './all-expenses.component.html',
  styleUrls: ['./all-expenses.component.css']
})
export class AllExpensesComponent implements OnInit{
  expenses: Expense[]= [];
  constructor(private expenseService: ExpenseService,
    private router: Router){}
  ngOnInit(): void {
      this.expenseService.getExpenses().subscribe(
        data=> this.expenses = data
      )
  }
  public deletExpense(id:number){
    if(confirm('are you sure to delete this record?'))
     this.expenseService.deletExpense(id).subscribe(
      data => {
        console.log('deleted response', data); 
        this.refresh();
      }
     )
  }

  refresh(){
    this.router.navigateByUrl("/expenses");
  }

  public deleteAll(){
    if(confirm('are you sure to delete all records?'))
    this.expenseService.deleteAll().subscribe(
      data=> {console.log(data);
        this.refresh();
      }
    )
  }

  update(id:number){
    this.router.navigate(['update',id]);
  }
  
}
