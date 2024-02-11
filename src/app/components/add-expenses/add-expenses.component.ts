import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit{
  expense: Expense= new Expense();
  constructor(private expenseService: ExpenseService,
    private router: Router){}
  ngOnInit(): void {
      
  }
 
  addExpense(){
    this.expenseService.addExpense(this.expense).subscribe(
      data=>{
        console.log(data)
        this.router.navigateByUrl("/expenses")
      }
    )
  }

}
