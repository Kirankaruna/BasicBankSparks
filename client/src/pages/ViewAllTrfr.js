import {  React, useEffect, useState} from "react";
import axios from "axios";

// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import './NewTransfer.css'
import _ from 'lodash';

const ViewAllTrfr = () => {
  const base_url = process.env.REACT_APP_API_PATH || "";

//   const navigate = useNavigate();
  const [transfers, setTransfers] = useState([]);



  useEffect(() => {
    axios.get(`${base_url}/transfer/viewall`).then((response) => {
      const sortedTransfers = _.sortBy(response.data, (transfer) => new Date(transfer.createdAt)).reverse();  
      setTransfers(sortedTransfers);
    })
  });

  return (
    <div className="container">
        <div className="p-4">
        <p className="display-4">All Transfers ({transfers.length})</p>
        <hr />
            <div className=" my-4">
            {transfers.map((transfer) => {
                return (
                    <div className="m-2 pb-3">
                    <form key={transfer.id}>
                        <div className="card mx-3">
                            <div className="card-header">
                                <span className="fw-bold">Transfer ID:</span>{transfer.id}
                                <span className="ps-5 fw-bold">Transfer Date: </span>{transfer.date}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Payer Account:<span className="lead">{transfer.payerAccNum}</span> <span className="px-5"></span> to <span className="px-5"></span> Payee Account:<span className="lead">{transfer.payeeAccNum}</span></h5>
                                <p className="card-text"></p>
                                <hr />
                                <p className="card-text"><strong>Transfer Amount: <span className="lead">Rs.{transfer.trfrAmt}</span></strong></p>
                            </div>
                        </div>
                    </form>
                    </div>
                );
            })}
        </div>
    </div>
    </div>
    
  );
};

export default ViewAllTrfr;
