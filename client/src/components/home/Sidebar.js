import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import {logout} from '../../redux/actions/authAction';
import Client from './client/Client';
import Invoice from './invoice/Invoice';
import Goods from './goods/Goods';



//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'

import $ from 'jquery';

import { useDispatch } from 'react-redux';

const Sidebar = ({auth}) => {

    const [Menu, setMenu] = useState(1);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
           
        
    }
 
    return (
      <div className="MainDiv">
        <div className="d-flex" id="wrapper">


            <div className=" border-right" id="sidebar-wrapper">
              <div className="sidebar-heading"><Avatar src={auth.user.avatar} size="big-avatar" /><span className="mx-1">{auth.user.username}</span></div>
              <div className="sidebar-heading"></div>
              <div className="list-group list-group-flush">
                <div onClick={() => setMenu(1)} className={`list-group-item list-group-item-action text-info  ${Menu === 1 && "active_menu_link"}`}><a href="/" ><i className="fas  fa-home" /> Home</a></div>
                <div onClick={() => setMenu(2)}  className={`list-group-item list-group-item-action  ${Menu === 2 && "active_menu_link"}`}><i className="fas fa-table" /> My Clients</div>
                <div onClick={() => setMenu(3)} className={`list-group-item list-group-item-action  ${Menu === 3 && "active_menu_link"}`}>In</div>
                <div onClick={() => setMenu(4)} className={`list-group-item list-group-item-action  ${Menu === 4 && "active_menu_link"}`}> b</div>
                <div onClick={() => setMenu(5)} className={`list-group-item list-group-item-action  ${Menu === 5 && "active_menu_link"}`}> <i className="fab fa-artstation" /> Goods</div>
                <div onClick={() => setMenu(6)} onClick={() => dispatch(logout())} className="list-group-item list-group-item-action text-danger"><i className="fas fa-power-off" /> Logout</div>
              </div>
            </div>

            <div id="page-content-wrapper">
            <nav className="navbar navbar-expand-lg  ">
                <button className="btn btn-primary ms-1" id="menu-toggle" onClick={handleClick}><i class="fas fa-bars" /></button>
            </nav>
              

              <div className="container-fluid">
              {Menu === 2 && <Client />}
              {Menu === 3 && <Invoice />}
              
              {Menu === 5 && <Goods />}
                    
              </div>
            </div>


        </div>

      </div>
    );
  }


export default Sidebar;