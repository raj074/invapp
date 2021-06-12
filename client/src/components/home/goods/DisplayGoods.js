import React from 'react'
import { useSelector } from 'react-redux'

const DisplayGoods = () => {
    const {goods} = useSelector(state => state)
    return (
        <div className="display_clients">
            {
                goods.myGoods.map(item => (
                    <div className="display_client_card">
                        
                        <div className="display_client_card_header">
                            {item.goodsName}
                        </div>              
                        <div className="display_client_card_footer">
                            <span><i class="fas fa-rupee-sign" /> {item.price}</span>
                            <span><i class="fas fa-code" /> {item.searchCode}</span>
                        </div>              
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayGoods
