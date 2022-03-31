import axios from "axios";
import React, { useState } from "react";



export default function AddUserComponent(props:any) {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    //Add User Function
    function addUser(e: any) {
        e.preventDefault();
        // console.log("Name:-",name);
        // console.log("Mobile:-",mobile);  
        let reqData: any = {
            name: name,
            mobile: mobile
        }
        axios.post('http://localhost:3001/api/addUser', reqData).then((res: any) => {
            console.log(res);
            formReset();
        }).catch((err: any) => {
            console.log(err);
        });
        props.addUser();
    }
    //Form Reset
    function formReset(){
       setName('');
       setMobile('');
    }
    return (
        <>
            <div className="container">
                <div className="p-2 m-2">
                    <h1>{true ? "Edit user details" : "Add a user"}</h1>
                    <form onSubmit={(e) => addUser(e)}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile</label>
                            <input type="number" className="form-control" id="mobile" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">{true ? "Update" : "Add"}</button>
                    </form>
                </div>
            </div>
        </>
    );
}