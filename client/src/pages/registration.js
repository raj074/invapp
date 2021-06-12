import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerationDetails } from "../redux/actions/authAction";

const Intro = () => {
  const { auth, alert, intro } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = {
    mobile: "",
    address: "",
    street: "",
    zip: "",
    city: "",
    state: "",
    country: "",
    website: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { mobile, address, street, zip, city, state, country, website } = userData;


  useEffect(() => {
    if (intro === true) history.push("/");
  }, [intro, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerationDetails({data:userData, auth}));
  };

  return (
    <div className="auth_page">
      <form onSubmit={handleSubmit} className="inner-shadow">
        <h3 className="text-uppercase text-center mb-4 auth-heading">
          R
        </h3>
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

        

        <button
          type="submit"
          className="btn-1 w-100 d-flex outer-shadow hover-in-shadow justify-content-center"
        >
          Next
        </button>
       
      </form>
    </div>
  );
};

export default Intro;
