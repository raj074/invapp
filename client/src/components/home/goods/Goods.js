import React, { useEffect, useState } from 'react'
import AddGoods from './AddGoods'
import DisplayGoods from './DisplayGoods'
import {getGoods} from '../../../redux/actions/goodsAction'
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../../LoadingScreen';


const Goods = () => {
    const [showAddGoods, setShowAddGoods] = useState(false);
    const {auth, goods} = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGoods({auth}));
    }, [dispatch, auth])

    return (
        <div>
            <div className="client_container" >
                { !showAddGoods && <div className="client_header">
                    <span className="client_header_left_side">
                        <h2 className="client_header_left_side_heading">MY GOODS</h2>
                        <span><a href="/">Home</a> / <span style={{fontWeight: "bold", color: "black"}}>My Goods</span></span>
                    </span>
                    <button  className="my-2 btn-1 outer-shadow hover-in-shadow" onClick={() => setShowAddGoods(true)}><i class="fas fa-plus" /> Add Good</button>
                </div>}
                <div className="client_body">
                    {goods.loading 
                        ? <LoadingScreen /> 
                        : showAddGoods 
                            ? (<div className="add_client"><AddGoods setShowAddGoods={setShowAddGoods} /></div>)
                            : (<DisplayGoods />)
                    }
                </div>

            </div>
        </div>
    )
}

export default Goods
