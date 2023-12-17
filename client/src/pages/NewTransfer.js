import { useParams } from "react-router-dom";
import {  React, useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './NewTransfer.css'

const NewTranfer = () => {
  const base_url = process.env.REACT_APP_API_PATH || "";

  const { payerid } = useParams();

  const navigate = useNavigate();


  const initState = {
    name: '',
    email: '',
    balance: ''
  }


  const [payer, setPayer] = useState(false);

  const [payee, setPayee] = useState(false);

  const accRef = useRef();
  const trfrRef = useRef();


  useEffect(() => {
    axios.get(`${base_url}/customer/view/${payerid}`).then((response) => {
      // console.log(response.data);
      setPayer(response.data);
    }).catch((err)=>{
        if(err.response.status===404){
            toast.error('Check the customer id!',{toastId:'issue1'})
            navigate('/customers');
        }
    });
  });

  const handleChange = () => {

    if(accRef.current.value !== payer.accNum){
      setPayee(initState);
      const accNum = accRef.current.value;
      if(accNum.toString().length <= 8){
        axios.get(`${base_url}/customer/view/acc/${accNum}`).then((response) => {
          // console.log(response.data);
          setPayee(response.data);
          toast.success('Valid account number detected',{toastId:'issue4'})
        }).catch((err)=>{
            // if(err.response.status===404){
                toast.error('Check the account number',{toastId:'issue2'})
                // navigate('/customers');
            // }
        });
      }
    }
    else{
      toast.error('Payer and Payee cannot be the same',{toastId:'issueasdaser'})
    }

  }

  const handleSubmit = () => {
    
    if(payee.name && payee.email && (trfrRef.current.value > 0 )){
      axios.get(`${base_url}/transfer/verifytrfr/${payer.accNum}/${trfrRef.current.value}`).then((response) => {
        // console.log(response.data);
        // toast.success('valid trfr',{toastId:'issue12312'})
        axios.post(`${base_url}/transfer/createtrfr`,{ 
          "payeeAccNum" : accRef.current.value,
          "payerAccNum" : payer.accNum,
          "trfrAmt" : trfrRef.current.value
         }).then((response) => {
          toast.success(`Tansfer Completed with Transaction ID ${response.data.id}`,{toastId:'issue4asdasr'})
          navigate('/customers');
        }).catch((err)=>{
            // if(err.response.status===404){
                toast.error('Transfer Failed',{toastId:'issue2asdasdasd'})
                // navigate('/customers');
            // }
        });









      }).catch((err)=>{
          // if(err.response.status===404){
              toast.error('Not a valid trfr',{toastId:'iss12312312'})
              // navigate('/customers');
          // }
      });

    }
    else{
      toast.error('Please fill out the details',{toastId:'issue5'})
    }

    }
  

  const dummy = () =>{
    console.log("hello");
  }

  return (
    <div className="p-4">
      <div className="fs-1 fw-light">New Transfer</div>
      <hr />
      <div className="row pt-2">
        <div className="col-md-4 offset-md-1">
          <p className="fs-3">Payer Details</p>
          <div
            className="border px-5 py-4 shadow p-3 mb-5 bg-body rounded"
            key={payer.id}
          >
            <div className="d-flex mb-3">
              <div className="me-5">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={payer.name}
                  id="name"
                  disabled
                ></input>
              </div>
              <div className="me-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={payer.email}
                  id="name"
                  disabled
                ></input>
              </div>
            </div>
            <div className="mb-3">
              <div className="pt-2 pe-3">
                <label className="form-label">Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={payer.accNum}
                  id="name"
                  disabled
                ></input>
              </div>
              <div className="pt-3 pe-3">
                <label className="form-label">Balance</label>
                <input
                  type="text"   
                  className="form-control"
                  value={payer.balance}
                  id="name"
                  disabled
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 d-flex align-items-center justify-content-center ">
          <span className="fs-3 fw-light">to</span>
        </div>
        <div className="col-md-4">
          <p className="fs-3">Payee Details</p>
          <div className="border px-5 py-4 shadow p-3 mb-5 bg-body rounded">
            <div className="d-flex mb-3">
              <div className="me-5">
                <label className="form-label">Name</label>
                <input type="text" value={payee.name} className="form-control" id="payeename" disabled onChange={dummy}></input>
              </div>
              <div className="me-3">
                <label className="form-label">Email</label>
                <input type="text"  value={payee.email} className="form-control" id="payeeemail" disabled onChange={dummy}></input>
              </div>
            </div>
            <div className="mb-3">
              <div className="pt-2 pe-3">
                <label className="form-label">Account Number</label>
                <input type="number" className="form-control" id="name" placeholder="Enter the 8 digit account number" onChange={handleChange} ref={accRef} ></input>
              </div>
              <div className="pt-4 pe-3">
                <label className="form-label">Transfer Amount</label>
                <input type="number" className="form-control" id="trframt" placeholder="Enter the amount to transfer"  ref={trfrRef} ></input>
              </div>
              <div className="d-grid gap-2 pe-3 mt-5">
                <button className="btn btn-primary py-2" type="button" onClick={handleSubmit}>
                  Send 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTranfer;
