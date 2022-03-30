import React from "react";

export default function ListUserComponent() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card col-12 col-lg-3 col-md-4 col-sm-6 p-2 m-2">
                        <h5 className="card-header">{"Sandeep"}</h5>
                        <div className="card-body">
                            <h5 className="card-title">Mobile Number</h5>
                            <p className="card-text">{"9559123391"}</p>
                            <a href="#" className="btn btn-primary me-3" >Edit</a>
                            <a href="#" className="btn btn-primary">Delete</a>
                        </div>
                    </div>
                </div >

            </div >
        </>
    );
}