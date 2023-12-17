package com.spark.BasicBank.controller;

import com.spark.BasicBank.models.Customer;
import com.spark.BasicBank.models.Transfer;
import com.spark.BasicBank.service.CustomerService;
import com.spark.BasicBank.service.TransferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/transfer")
public class TransferController {
    @Autowired
    TransferService transferService;

    List<Transfer> transferList;

    Transfer transfer;

    Customer cust;
        @GetMapping("/viewall")
    public List<Transfer> viewTransfers(){
        transferList = new ArrayList<>();
        transferList = transferService.viewTransfers();
        if(transferList.get(0)!=null)
            return transferList;
        else
            return null;
    }


    @GetMapping("/verifytrfr/{payerAccNum}/{trfrAmt}")
    public ResponseEntity<Boolean> verifyTransfer( @PathVariable("payerAccNum") String payerAccNum, @PathVariable("trfrAmt") Float trfrAmt){
        if(transferService.verifyTransfer(payerAccNum,trfrAmt))
            return new ResponseEntity<Boolean>(true, HttpStatus.OK);
        else
            return new ResponseEntity<Boolean>(false,HttpStatus.NOT_FOUND);
    }

    @PostMapping("createtrfr")
    public ResponseEntity<Transfer> createTransfer(@RequestBody Transfer transfer){
        transfer = transferService.createTransfer(transfer.getPayerAccNum(),transfer.getPayeeAccNum(), transfer.getTrfrAmt());
        if(transfer != null)
            return new ResponseEntity<Transfer>(transfer, HttpStatus.OK);
        else
            return new ResponseEntity<Transfer>(transfer,HttpStatus.NOT_FOUND);
    }

}

