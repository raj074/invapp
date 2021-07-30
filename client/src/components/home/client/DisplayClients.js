import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import ClientDetails from './ClientDetails'

const DisplayClients = ({showClientDetails, setShowClientDetails, clientDetails, setClientDetails}) => {
    const {clients} = useSelector(state => state)

    
   

    const handleShowClient = (client) => {
        setClientDetails(client)
        setShowClientDetails(true)
    }

    return (
        <div className="display_clients">
            {
                showClientDetails
                ? <ClientDetails client={clientDetails} />
                :(clients.myClients.map(client => (
                    <div className="display_client_card">
                        <div className="display_client_card_header"  onClick={() => handleShowClient(client)}>
                            {client.clientName}
                        </div>              
                        <div className="display_client_card_footer">
                            <span><i class="far fa-envelope" /> {client.email}</span>
                            <span><i class="fas fa-map-marker-alt" /> {client.city}, {client.country}</span>
                        </div>              
                    </div>
                )))
            }
        </div>
    )
}

export default DisplayClients
