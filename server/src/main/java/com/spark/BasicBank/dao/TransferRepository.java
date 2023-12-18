package com.spark.BasicBank.dao;

import com.spark.BasicBank.models.Transfer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface TransferRepository extends MongoRepository<Transfer,String> {

}
