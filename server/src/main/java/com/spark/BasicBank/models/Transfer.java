package com.spark.BasicBank.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "Transfers")
public class Transfer {

    @Id
    private String id;
    private String payerAccNum;
    private String payeeAccNum;
    private String date;
    private Float trfrAmt;

    public Transfer() {

    }


    public Transfer(String id, String payerAccNum, String payeeAccNum, String date, Float trfrAmt) {
        this.id = id;
        this.payerAccNum = payerAccNum;
        this.payeeAccNum = payeeAccNum;
        this.date = date;
        this.trfrAmt = trfrAmt;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPayerAccNum() {
        return payerAccNum;
    }

    public void setPayerAccNum(String payerAccNum) {
        this.payerAccNum = payerAccNum;
    }

    public String getPayeeAccNum() {
        return payeeAccNum;
    }

    public void setPayeeAccNum(String payeeAccNum) {
        this.payeeAccNum = payeeAccNum;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Float getTrfrAmt() {
        return trfrAmt;
    }

    public void setTrfrAmt(Float trfrAmt) {
        this.trfrAmt = trfrAmt;
    }

    @Override
    public String toString() {
        return "Transfer{" +
                "id='" + id + '\'' +
                ", payerAccNum='" + payerAccNum + '\'' +
                ", payeeAccNum='" + payeeAccNum + '\'' +
                ", date='" + date + '\'' +
                ", trfrAmt=" + trfrAmt +
                '}';
    }
}
