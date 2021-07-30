import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ClientDetails = ({client}) => {
    const {invoice} = useSelector(state => state);
    const [clientInvoices, setClientInvoices] = useState([]);

    useEffect(() => {
        const newArr = invoice.myInvoices.filter((inv) => inv.client === client._id );
        setClientInvoices(newArr.reverse());
    }, [invoice.myInvoices])

    return (
        <div className="clientDetails_container">
            <div className="clientDetails_header">
                <div className="clientDetails_header_leftSide">
                    <h2 style={{color: "#7a7c7e"}}>{client.clientName}</h2>
                    <h5>Contact Person:</h5>
                    <span className="d-flex flex-column">
                        <span>Name: {client.firstName}  {client.lastName}</span>
                        <span>Email: {client.email}  </span>
                        <span>Moblie: {client.mobile}  </span>
                        {client.website !== "" && <span>Website: {client.website}  </span>}
                    
                    </span>
                </div>
                <div className="clientDetails_header_rightSide">
                    <h5>Address:</h5>
                    {client.billingAddress !== "" && <span>Billing Address: {client.billingAddress}  </span>}
                    <span>ZIP: {client.zip}  </span>
                    <span>Street: {client.street}  </span>
                    <span>City: {client.city}  </span>
                    <span>State: {client.state}  </span>
                    <span>Country: {client.country}  </span>
                </div>
            </div>
        
            <div className="clientDetails_footer">
                {
                    clientInvoices.length > 0 
                    ? clientInvoices.map(invoice => (
                        <div className="clientDetails_invoice">
                            <span className="d-flex flex-column">
                                <span>Invoice no</span>
                                <span>{invoice.invoiceNumber}</span>
                            </span>
                            <span className="d-flex flex-column">
                                <span>Total items</span>
                                <span>{invoice.items.length}</span>
                            </span>
                            <span className="d-flex flex-column">
                                <span>Date</span>
                                <span>{new Date(invoice.date).toLocaleDateString()}</span>
                            </span>
                            <span className="d-flex flex-column">
                                <span>Payment Days</span>
                                <span>{invoice.paymentDays}</span>
                            </span>
                            <span className="d-flex flex-column">
                                <span>Total items</span>
                                <span>{invoice.items.length}</span>
                            </span>
                            <span className="d-flex flex-column">
                                <span>Total amount</span>
                                <span>{invoice.total.toFixed(2)}</span>
                            </span>
                            
                        </div>
                    ))
                    : (<h2 style={{color:"#7a7c7e", textAlign:"center"}}>NO INVOICES CREATED FOR THIS CLIENT</h2>)
                }
            </div>

        </div>
    )
}

export default ClientDetails
