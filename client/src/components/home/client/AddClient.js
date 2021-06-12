import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClient } from "../../../redux/actions/clientAction";


const AddClient = ({setShowAddClient}) => {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();

  const initialState = {
    clientName: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    billingAddress: "",
    street: "",
    zip: "",
    city: "",
    state: "",
    country: "",
    website: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { clientName, firstName, lastName, email, mobile, address, street, zip, city, state, country, website } = userData;



  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addClient({data:userData, auth, setShowAddClient}));
    
  };

  return (
    <div className="w-100 auth_page">
      <form onSubmit={handleSubmit} className="inner-shadow w-100">

      <div className="mb-3">
          <label htmlFor="clientName" className="form-label">
            client name 
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="clientName"
              onChange={handleChangeInput}
              value={clientName}
              name="clientName"
              style={{ background: `${alert.clientName ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.clientName ? alert.clientName : ""}
          </small>
        </div>

        <div>
            <span style={{fontWeight: "bold"}}>CONTACT PERSON:</span>
            
        </div>

        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            first name 
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={handleChangeInput}
              value={firstName}
              name="firstName"
              style={{ background: `${alert.firstName ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.firstName ? alert.firstName : ""}
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            last name 
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={handleChangeInput}
              value={lastName}
              name="lastName"
              style={{ background: `${alert.lastName ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.lastName ? alert.lastName : ""}
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
          email 
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="email"
              onChange={handleChangeInput}
              value={email}
              name="email"
              style={{ background: `${alert.email ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.email ? alert.email : ""}
          </small>
        </div>

       
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
          mobile
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="mobile"
              onChange={handleChangeInput}
              value={mobile}
              name="mobile"
              style={{ background: `${alert.mobile ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.mobile ? alert.mobile : ""}
          </small>
        </div>

        <div>
            <span style={{fontWeight: "bold"}}>BILLING ADDRESS:</span>
            
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
          address
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="address"
              onChange={handleChangeInput}
              value={address}
              name="address"
              style={{ background: `${alert.address ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.address ? alert.address : ""}
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="street" className="form-label">
          street
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="street"
              onChange={handleChangeInput}
              value={street}
              name="street"
              style={{ background: `${alert.street ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.street ? alert.street : ""}
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="zip" className="form-label">
          zip
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="zip"
              onChange={handleChangeInput}
              value={zip}
              name="zip"
              style={{ background: `${alert.zip ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.zip ? alert.zip : ""}
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">
          city
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="city"
              onChange={handleChangeInput}
              value={city}
              name="city"
              style={{ background: `${alert.city ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.city ? alert.city : ""}
          </small>
        </div>


        <div className="mb-3">
          <label htmlFor="state" className="form-label">
          state
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="state"
              onChange={handleChangeInput}
              value={state}
              name="state"
              style={{ background: `${alert.state ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.state ? alert.state : ""}
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">
          country
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="country"
              onChange={handleChangeInput}
              value={country}
              name="country"
              style={{ background: `${alert.country ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.country ? alert.country : ""}
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="website" className="form-label">
          website
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="website"
              onChange={handleChangeInput}
              value={website}
              name="website"
              style={{ background: `${alert.website ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.website ? alert.website : ""}
          </small>
        </div>

        <div style={{justifyContent: "space-between", display:"flex"}}>
            <button
            type="submit"
            className="btn-1 mx-1 w-50 d-flex outer-shadow hover-in-shadow "
            >
                Create
            </button>
            <div
            onClick={() => setShowAddClient(false)}
            className="btn-1 w-50 mx-1 d-flex outer-shadow hover-in-shadow "
            >
                Cancel
            </div>
        </div>

        
       
      </form>
      
    </div>
  );
};

export default AddClient;
