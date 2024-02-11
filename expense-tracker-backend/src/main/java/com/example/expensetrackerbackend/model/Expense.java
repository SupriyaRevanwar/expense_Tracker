package com.example.expensetrackerbackend.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@Entity
@Table(name = "expensesweb")
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "category")
    private String category;

    @Column(name = "price")
    private Double price;

    @Column(name = "datep")
    private LocalDate datep;

    @Column(name = "descript")
    private String descript;

    public Expense() {
    }

    public Expense(Long id, String category, Double price, LocalDate datep, String descript) {
        this.id = id;
        this.category = category;
        this.price = price;
        this.datep = datep;
        this.descript = descript;
    }

    @Override
    public String toString() {
        return "Expense [id=" + id + ", category=" + category + ", price=" + price + ", datep=" + datep
                + ", description=" + descript + "]";
    }
    
    

}
