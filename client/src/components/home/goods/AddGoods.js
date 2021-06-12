import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGoods } from "../../../redux/actions/goodsAction";


const AddClient = ({setShowAddGoods}) => {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();

  const initialState = {
    goodsName: "",
    price: 0,
    searchCode: ""
  };
  const [userData, setUserData] = useState(initialState);
  const { goodsName, price, searchCode } = userData;



  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGoods({data:userData, auth, setShowAddGoods}));
    
  };

  return (
    <div className="w-100 auth_page">
      <form onSubmit={handleSubmit} className="inner-shadow w-100">

      <div className="mb-3">
          <label htmlFor="goodsName" className="form-label">
            goods name 
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="goodsName"
              onChange={handleChangeInput}
              value={goodsName}
              name="goodsName"
              style={{ background: `${alert.goodsName ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.goodsName ? alert.goodsName : ""}
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="searchCode" className="form-label">
          search code 
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="searchCode"
              onChange={handleChangeInput}
              value={searchCode}
              name="searchCode"
              style={{ background: `${alert.searchCode ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.searchCode ? alert.searchCode : ""}
          </small>
        </div>


        <div className="mb-3">
          <label htmlFor="price" className="form-label">
          price 
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="price"
              onChange={handleChangeInput}
              value={price}
              name="price"
              style={{ background: `${alert.price ? "#fd2d6a14" : ""} ` }}
            />
          </div>
          <small className="form-text text-danger">
            {alert.price ? alert.price : ""}
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
            onClick={() => setShowAddGoods(false)}
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
