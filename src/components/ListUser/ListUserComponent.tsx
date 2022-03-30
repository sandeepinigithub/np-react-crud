import React, { useEffect, useState } from "react";
import axios from "axios";
import { json } from "stream/consumers";

export default function ListUserComponent() {
    const [users, setUsers] = useState([]);
    useEffect(function () {
        axios.get('http://localhost:3001/api/getUsers').then((res: any) => {
            setUsers(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    {users.map((item: any) => {
                        return (<div key={item.id} className="card col-12 col-lg-3 col-md-4 col-sm-6 p-2 m-2">
                            <h5 className="card-header">{item.name}</h5>
                            <div className="card-body">
                                <h5 className="card-title">Mobile Number</h5>
                                <p className="card-text">{item.mobile}</p>
                                <a href="#" className="btn btn-primary me-3" >Edit</a>
                                <a href="#" className="btn btn-primary">Delete</a>
                            </div>
                        </div>)
                    })}
                </div >
            </div >
        </>
    )
}