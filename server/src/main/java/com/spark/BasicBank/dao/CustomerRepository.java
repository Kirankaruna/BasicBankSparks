package com.spark.BasicBank.dao;

import com.spark.BasicBank.models.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends MongoRepository<Customer,String> {

    Customer getCustById(String id);
    Customer getCustByAccNum(String accNum);
}
