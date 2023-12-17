package com.spark.BasicBank.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Customer")
public class Customer {
    @Id
    private String id;
    private String name;
    private String accNum;
    private String email;
    private Float balance;

    public Customer() {
    }

    public Customer(String id, String name, String accNum, String email, Float balance) {
        this.id = id;
        this.name = name;
        this.accNum = accNum;
        this.email = email;
        this.balance = balance;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAccNum() {
        return accNum;
    }

    public void setAccNum(String accNum) {
        this.accNum = accNum;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Float getBalance() {
        return balance;
    }

    public void setBalance(Float balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", accNum='" + accNum + '\'' +
                ", email='" + email + '\'' +
                ", balance=" + balance +
                '}';
    }
}
