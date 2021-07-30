import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import CreateInvoiceForm from './CreateInvoiceForm'
import {getClients} from '../../../redux/actions/clientAction'
import {getGoods} from '../../../redux/actions/goodsAction'

const Invoice = () => {

    const {auth} = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClients({auth}));
    }, [dispatch, auth])

    useEffect(() => {
        dispatch(getGoods({auth}));
    }, [dispatch, auth])

    return (
        <div>
            <div className="client_container" >
                 <div className="client_header">
                    <span className="client_header_left_side">
                        <h2 className="client_header_left_side_heading">In</h2>
                        <span><a href="/">Home</a> / <span style={{fontWeight: "bold", color: "black"}}>In</span></span>
                    </span>
                     </div>
                <div className="client_body">
                   <CreateInvoiceForm />
                            
                </div>

            </div>
        </div>
    )
}

export default Invoice
