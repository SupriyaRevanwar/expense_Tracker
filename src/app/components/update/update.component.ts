import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  id:number;
  expense: Expense= new Expense();
  constructor(private expenseService: ExpenseService,
    private router: Router,
    private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.expenseService.getExpenseById(this.id).subscribe(data=>{
      this.expense=data;
    },error=>console.log(error)
    );
  }
   public updatExpense(){
    this.expenseService.updateExpense(this.id,this.expense).subscribe(
      data=>{
        this.gotoList(); 
      },error=>console.log(error)
    );
  }

  gotoList(){
    this.router.navigateByUrl("/expenses");
  }
}
