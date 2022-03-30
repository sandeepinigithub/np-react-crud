import React from "react";

export default function AddUserComponent() {
    return (
        <>
            <div className="container">
                <div className="p-2 m-2">
                    <h1>{true ? "Edit user details" : "Add a user"}</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile</label>
                            <input type="number" className="form-control" id="mobile" name="mobile"/>
                        </div>
                        <button type="submit" className="btn btn-primary">{true ? "Update" : "Add"}</button>
                    </form>
                </div>
            </div>
        </>
    );
}