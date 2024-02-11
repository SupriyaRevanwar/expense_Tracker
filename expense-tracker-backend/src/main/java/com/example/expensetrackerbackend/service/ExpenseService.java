package com.example.expensetrackerbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.expensetrackerbackend.model.Expense;
import com.example.expensetrackerbackend.repository.ExpenseRepository;
@Service
public class ExpenseService {
    @Autowired
    private ExpenseRepository expenseRepository;

    public Expense savExpense(Expense expense){
        return expenseRepository.save(expense);
    }

    public List<Expense> getExpenses(){
        return expenseRepository.findAll();
    }
    
    public Expense getExpenseById(Long id){
        return expenseRepository.findById(id).orElse(null);
    }
    
    public void deleteExpense(Long id){
        expenseRepository.deleteById(id);
    }

    public String deleteAllExpenses(){
        expenseRepository.deleteAll();
        return "All expenses deleted";
    }

    public Expense updatExpense(Long id,  Expense expense){
        Expense existigExpense= expenseRepository.findById(id).orElse(null);
        existigExpense.setCategory(expense.getCategory());
        existigExpense.setPrice(expense.getPrice());
        existigExpense.setDatep(expense.getDatep());
        existigExpense.setDescript(expense.getDescript());
        return expenseRepository.save(existigExpense);
        
    }

}
