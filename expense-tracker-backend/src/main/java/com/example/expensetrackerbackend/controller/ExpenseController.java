package com.example.expensetrackerbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.expensetrackerbackend.model.Expense;
import com.example.expensetrackerbackend.service.ExpenseService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ExpenseController {
    @Autowired
    private ExpenseService expenseService;
    
    @PostMapping("/expenses")
    public Expense addExpense(@RequestBody Expense expense){
        return expenseService.savExpense(expense);
    }
    
    @GetMapping("/expenses")
    public List<Expense> getExpenses(){
        return expenseService.getExpenses();
    }
    
    @GetMapping("/expenses/{id}")
    public Expense getExpenseById(@PathVariable Long id){
        return expenseService.getExpenseById(id);
    }
    
    @PutMapping("/expenses/{id}")
    public Expense updateExpense(@PathVariable Long id,@RequestBody Expense expense){
        return expenseService.updatExpense(id, expense);
    }
    
    @DeleteMapping("/expenses/{id}")
    public String deletExpense(@PathVariable Long id){
         expenseService.deleteExpense(id);
         return "Expense is deleted successfully";
    }
    
    @DeleteMapping("/expenses")
    public String deleteAll(){
        return expenseService.deleteAllExpenses();
    }

    
}
