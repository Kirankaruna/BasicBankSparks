package com.spark.BasicBank.service;

import com.spark.BasicBank.dao.CustomerRepository;
import com.spark.BasicBank.models.Customer;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;
    List<Customer> customerList;

    Customer cust;
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }


    public Customer createCustomer(Customer customer){
        return customerRepository.save(customer);
    }


    public List<Customer> viewCustomers(){
        customerList = new ArrayList<>();
        customerList = customerRepository.findAll();
        return  customerList;
    }

    public Customer viewCustomerById(String id){
        if (customerRepository.existsById(id))
            return customerRepository.getCustById(id);
        else{
            return null;
        }
    }


    public Customer viewCustomerByAccNum(String accNum){
        cust = customerRepository.getCustByAccNum(accNum);
        if(cust!=null)
            return cust;
        else
            return null;
    }













}
