import React, { useEffect, useState } from 'react'
import AddClient from './AddClient'
import DisplayClients from './DisplayClients'
import {getClients} from '../../../redux/actions/clientAction'
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../../LoadingScreen';


const Client = () => {
    const [showAddClient, setShowAddClient] = useState(false);
    const {auth, clients} = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClients({auth}));
    }, [dispatch, auth])

    return (
        <div>
            <div className="client_container" >
                { !showAddClient && <div className="client_header">
                    <span className="client_header_left_side">
                        <h2 className="client_header_left_side_heading">MY CLIENTS</h2>
                        <span><a href="/">Home</a> / <span style={{fontWeight: "bold", color: "black"}}>My Clients</span></span>
                    </span>
                    <button  className="my-2 btn-1 outer-shadow hover-in-shadow" onClick={() => setShowAddClient(true)}><i class="fas fa-plus" /> Add client</button>
                </div>}
                <div className="client_body">
                    {clients.loading 
                        ? <LoadingScreen /> 
                        : showAddClient 
                            ? (<div className="add_client"><AddClient setShowAddClient={setShowAddClient} /></div>)
                            : (<DisplayClients />)
                    }
                </div>

            </div>
        </div>
    )
}

export default Client
