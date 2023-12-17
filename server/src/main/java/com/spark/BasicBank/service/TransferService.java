package com.spark.BasicBank.service;

import com.spark.BasicBank.dao.TransferRepository;
import com.spark.BasicBank.models.Customer;
import com.spark.BasicBank.models.Transfer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
@Service
public class TransferService {
    private final TransferRepository transferRepository;


    @Autowired
    CustomerService customerService;
    Customer customer;


    Transfer transfer;
    List<Transfer> transferList;


    public TransferService(TransferRepository transferRepository) {
        this.transferRepository = transferRepository;
    }

    public List<Transfer> viewTransfers() {
        transferList = new ArrayList<>();
        transferList = transferRepository.findAll();
        return transferList;
    }


    public Transfer createTransfer(String payerAccNum, String payeeAccNum, Float trfrAmt) {
        customer = customerService.viewCustomerByAccNum(payerAccNum);
        if (customer != null) {
            customer.setBalance(customer.getBalance() - trfrAmt);
            customerService.createCustomer(customer);
        }

        customer = customerService.viewCustomerByAccNum(payeeAccNum);
        if (customer != null) {
            customer.setBalance(customer.getBalance() + trfrAmt);
            customerService.createCustomer(customer);
        }
        transfer = new Transfer();
        transfer.setDate(LocalDate.now().toString());
        transfer.setPayeeAccNum(payeeAccNum);
        transfer.setPayerAccNum(payerAccNum);
        transfer.setTrfrAmt(trfrAmt);
        return transferRepository.save(transfer);
    }

    public boolean verifyTransfer(String payerAccNum, Float trfrAmt ){
        customer = customerService.viewCustomerByAccNum(payerAccNum);
        if (customer != null) {
            return customer.getBalance() >= trfrAmt;
        }
            return false;
    }


}