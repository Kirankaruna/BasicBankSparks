package com.spark.BasicBank.controller;

import com.spark.BasicBank.models.Customer;
import com.spark.BasicBank.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    Customer cust;

    List<Customer> customerList;

    @PostMapping("/add")
    public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer){
        cust = customerService.createCustomer(customer);
        if(cust != null)
            return new ResponseEntity<Customer>(cust, HttpStatus.OK);
        else
            return new ResponseEntity<Customer>(cust,HttpStatus.NOT_FOUND);

    }

    @GetMapping("/viewall")
    public List<Customer> viewCustomers(){
        customerList = new ArrayList<>();
        customerList = customerService.viewCustomers();
        if(customerList.get(0)!=null)
            return customerList;
        else
            return null;
    }



    @GetMapping("/view/{id}")
    public ResponseEntity<Customer> viewCustomerById(@PathVariable("id") String id){
        cust = customerService.viewCustomerById(id);
        if(cust != null)
            return new ResponseEntity<Customer>(cust, HttpStatus.OK);
        else
            return new ResponseEntity<Customer>(cust,HttpStatus.NOT_FOUND);
    }


    @GetMapping("/view/acc/{accNum}")
    public ResponseEntity<Customer> viewCustomerByAccNum(@PathVariable("accNum") String accNum){
        cust = customerService.viewCustomerByAccNum(accNum);
        if(cust != null)
            return new ResponseEntity<Customer>(cust, HttpStatus.OK);
        else
            return new ResponseEntity<Customer>(cust,HttpStatus.NOT_FOUND);
    }

}
