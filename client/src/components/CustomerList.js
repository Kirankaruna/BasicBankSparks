import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CustomerList = () => {

    const base_url = process.env.REACT_APP_API_PATH || '';
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);

    const handleSelect = (e) => {
        e.preventDefault();
        // console.log(e.target.custid.value);
        navigate(`/newtransfer/${e.target.custid.value}`);
    }

    // const handleChange = (event) => {
    //     // console.log(event.target.name.value);
    //     //dummy method
    // }

    useEffect(() => {
        axios.get(`${base_url}/customer/viewall`).then((response) => {
            // console.log(response.data);
            setCustomers(response.data)
        })
    })

    return (
        <div className="container">
        <div className="customers my-4 pe-5 d-flex ">
            {customers.map((customer) => {
                return (
                    <div className="m-2 pb-2">
                    <form onSubmit={handleSelect} key={customer.id}>
                        <div className="card ">
                            <div className="card-header fs-5">
                                Account Number: {customer.accNum}
                            </div>
                            <div className="card-body pe-4">
                                <h5 className="card-title fs-4">{customer.name}</h5>
                                <p className="card-text">{customer.email}</p>
                                <hr />
                                <p className="fs-5">Balance: {customer.balance}</p>
                                <input className="form-control" type="hidden" id="custid" value={customer.id}  />
                                <button type="submit" className="btn btn-primary">Start Transfer</button>
                            </div>
                        </div>
                    </form>
                    </div>
                );
            })}
        </div>
        </div>
    )
}

export default CustomerList