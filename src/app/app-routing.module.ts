import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllExpensesComponent } from './components/all-expenses/all-expenses.component';
import { AddExpensesComponent } from './components/add-expenses/add-expenses.component';
import { SearchComponent } from './components/search/search.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:"expenses",component:AllExpensesComponent},
  {path:"addExpenses",component:AddExpensesComponent},
  {path:"search",component:SearchComponent},
  {path:"update/:id",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
