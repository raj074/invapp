import React from 'react'
import { useSelector } from 'react-redux'

const DisplayClients = () => {
    const {clients} = useSelector(state => state)
    return (
        <div className="display_clients">
            {
                clients.myClients.map(client => (
                    <div className="display_client_card">
                        <div className="display_client_card_header">
                            {client.clientName}
                        </div>              
                        <div className="display_client_card_footer">
                            <span><i class="far fa-envelope" /> {client.email}</span>
                            <span><i class="fas fa-map-marker-alt" /> {client.city}, {client.country}</span>
                        </div>              
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayClients
