import axios from "axios";
import React, { useEffect, useState } from "react";



export default function AddUserComponent(props: any) {
    const initialValue = { name: "", mobile: "" };
    const [formValues, setFormValues] = useState(initialValue);
    const [formErrors, setFormErrors]:any = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }
    //Add User Function
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            axios.post('http://localhost:3001/api/addUser', formValues).then((res: any) => {
                console.log(res);
                props.addUser();
                setIsSubmit(false);
            }).catch((err: any) => {
                console.log(err);
            });
        }
    }, [formErrors])
    const validate = (values: any) => {
        const errors: any = {};
        if (!values.name) {
            errors.name = "Name is required"
        }
        if (!values.mobile) {
            errors.mobile = "Mobile number is required"
        }
        return errors
    }
    return (
        <>
            <div className="container">
                <div className="p-2 m-2">
                    <h1>{false ? "Edit user details" : "Add a user"}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={formValues.name} onChange={handleChange} />
                            {formErrors?.name ? (<p className="alert alert-danger mt-2">{formErrors?.name}</p>) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile</label>
                            <input type="number" className="form-control" id="mobile" name="mobile" value={formValues.mobile} onChange={handleChange} />
                            {formErrors?.mobile ? (<p className="alert alert-danger mt-2">{formErrors?.mobile}</p>) : null}
                        </div>
                        <button type="submit" className="btn btn-primary">{false ? "Update" : "Add"}</button>
                    </form>
                </div>
            </div>
        </>
    );
}