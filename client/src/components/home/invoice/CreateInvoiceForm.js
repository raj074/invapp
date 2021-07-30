import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addInvoice } from '../../../redux/actions/invoiceAction';

const CreateInvoiceForm = () => {
    const {clients, goods, auth} = useSelector(state => state)
    const dispatch = useDispatch();

    const [searchClient, setSearchClient] = useState("");
    
    const [selectClient, setSelectClient] = useState({clientName: "", city:"", state:"", country:"", billingAddress:""});
    const [searchResult, setSearchResult] = useState([]);
    const [date, setDate] = useState(null);
    const [invoiceNumber, setInvoiceNumber] = useState(auth.user.invoice+1);
    

    const [searchGoods, setSearchGoods] = useState("");
    const [goodsResult, setGoodsResult] = useState([]);
    const [selectGoods, setSelectGoods] = useState({searchCode:"", goodsName:"", price:0});
    const [goodsPrice, setGoodsPrice] = useState(selectGoods.price);
    const [goodsUnit, setGoodsUnit] = useState(0);
    const [goodsGst, setGoodsGst] = useState(18);
    const [billingGoods, setBillingGoods] = useState([]);
    const [emptyError, setEmptyError] = useState({ client: false, goods: false});
    const [totalPrice, setTotalPrice] = useState(0);
    const [paymentDays, setPaymentDays] = useState(0);

    

    const handleClientSearch = (search) => {
     
        setSearchClient(search);
        if(search === ""){
            setSearchResult([])
            
        }else{
            const abc = clients.myClients.filter(client => 
                client.clientName.search(search) !== -1
            )
            setSearchResult(abc)
        }
        

    }

    const handleGoodsSearch = (code) => {
     
        setSearchGoods(code);
        if(code === ""){
            setGoodsResult([])
           
        }else{
            const abc = goods.myGoods.filter(goods => 
                goods.searchCode.search(code) !== -1
            )
            setGoodsResult(abc)
        }
        

    }

    const handleCloseSearch = () => {
        setSearchClient("");
        setSearchResult([]);
        setSelectClient({clientName: "", city:"", state:"", country:"", billingAddress: ""});
    }

    const handleCloseGoods = () => {
        setSearchGoods("");
        setGoodsResult([]);
        setSelectGoods({searchCode:"", goodsName:"", price:0});
    }

    const handleChangeDate = (date) => {
        setDate(date);
    }

    const handleSelectClient = (result) => {
        
        setSelectClient(result)
        setSearchClient("");
        setSearchResult([]);
        setEmptyError({...emptyError, client: false })
    }

    const handleSelectGoods = (result) => {
        
        setSelectGoods(result)
        setSearchGoods("");
        setGoodsResult([]);
        setGoodsPrice(result.price);
        setEmptyError({...emptyError, goods: false })
    }

    const removeRow = ({index, total}) => {
        const newArr = [...billingGoods];
        newArr.splice(index, 1);
        setBillingGoods(newArr);
        setTotalPrice(totalPrice-total);
      };

    const handleAddProduct = () => {
        
        if(selectClient.clientName === ""){
            setEmptyError({...emptyError, client: true })
        }else{
            
            if(selectGoods.goodsName === ""){
                setEmptyError({client: false, goods: true })
            }else{
                setEmptyError({client: false, goods: false })
            }
        }

        if(selectClient.clientName !== "" && selectGoods.goodsName !== ""){
            
            let total = goodsUnit*goodsPrice + goodsUnit*goodsPrice*goodsGst/100;
                let newRow = {
                    goodsName: selectGoods.goodsName,
                    units: goodsUnit,
                    price: goodsPrice,
                    gst: goodsGst,
                    total
                }
               
            setBillingGoods([...billingGoods, newRow])
            setGoodsPrice(0);
            setGoodsUnit(0);
            setSelectGoods({searchCode:"", goodsName:"", price:0})
            setTotalPrice(totalPrice+total);
        }

        
       
    }

    const handleSubmit = () => {
        const invoice = {
            clientName: selectClient.clientName,
            city: selectClient.city,
            state: selectClient.state,
            country: selectClient.country,
            billingAddress: selectClient.billingAddress,
            invoiceNumber,
            items: billingGoods,
            paymentDays,
            total: totalPrice,
            date
        }

        dispatch(addInvoice({invoice, auth, client:selectClient._id}));

        setSelectClient({clientName: "", city:"", state:"", country:"", billingAddress:""});
        setDate(null);
        setInvoiceNumber(invoiceNumber + 1);
        setSelectGoods({searchCode:"", goodsName:"", price:0});
        setGoodsPrice(selectGoods.price);
        setGoodsUnit(0);
        setGoodsGst(18);
        setBillingGoods([]);
        setTotalPrice(0);
        setPaymentDays(0);

    }

   

    return (
        <div className="invoice_container">
            <div className="invoice_header">
                <div className="invoice_search_client">
                    <h6>Invoice no:</h6> <input value={invoiceNumber}  onChange={(e) => setInvoiceNumber(e.target.value)} />
                    <h6>Date:</h6> <input value={date} type="date" onChange={(e) => handleChangeDate(e.target.value)} />
                    <h6>Payment due days:</h6> <input value={paymentDays} type="number" onChange={(e) => setPaymentDays(e.target.value)} />
                    <h6>client:</h6> <div className="position-relative mb-1"><input  style={{border: emptyError.client ? "1px solid red" : "1px solid black" }}   className="w-100" value={selectClient.clientName === "" ? searchClient: selectClient.clientName} onChange={(e) => handleClientSearch(e.target.value)} />
                    {searchResult && <span className="invoice_search_client_close_button" onClick={handleCloseSearch}>&times;</span>}</div>
                    <div className="invoice_search_client_result_container">{
                        searchResult && searchResult.map(result => (
                            <div className="invoice_search_client_result" onClick={() => handleSelectClient(result)}>
                                <span>{result.clientName}</span>
                                <span>{result.city}</span>
                                <span>{result.state}</span>
                                <span>{result.country}</span>
                            </div>
                        ))
                    }</div>
                </div>
                <div className="invoice_client_delivery_address">
                    <h4>Delivery Address:</h4>
                    Client Name: <input value={selectClient.clientName} disabled />
                    City: <input value={selectClient.city} disabled />
                    State: <input value={selectClient.state} disabled />
                    Country: <input value={selectClient.country} disabled />
                    Billing Address: <input value={selectClient.billingAddress} disabled />
                </div>
            </div>
        
            <div className="invoice_body">
                
                    <div className="invoice_body_add_item">
                        <div>
                            <div className="position-relative mb-1">Product: <input style={{border: emptyError.goods ? "1px solid red" : "1px solid black" }}  value={selectGoods.goodsName === "" ? searchGoods: selectGoods.goodsName} className="w-100" onChange={(e) => handleGoodsSearch(e.target.value)} />
                            {goodsResult && <span className="invoice_search_client_close_button" onClick={handleCloseGoods}>&times;</span>}</div>
                            <div className="invoice_search_client_result_container">{
                            goodsResult && goodsResult.map(result => (
                                <div className="invoice_search_client_result" onClick={() => handleSelectGoods(result)}>
                                    <span>{result.searchCode}</span>
                                    <span>{result.goodsName}</span>
                                    <span>{result.price}</span>
                                </div>
                            ))
                            }
                            </div>
                        </div>
                        <div className="flex-column d-flex">
                            Units: <input value={goodsUnit} onChange={(e) => setGoodsUnit(e.target.value)} />
                        </div>
                        <div className="flex-column d-flex">
                            Price: <input value={goodsPrice} onChange={(e) => setGoodsPrice(e.target.value)} />
                        </div>
                        <div className="flex-column d-flex ">
                            gst: <input value={goodsGst} onChange={(e) => setGoodsGst(e.target.value)} />
                        </div>

                        <div onClick={handleAddProduct} className="btn-1 outer-shadow hover-in-shadow" style={{width:"100px", height:"50px"}}><i class="fas fa-plus" /> Add</div>
                 
                    </div>
                    
                    <div className="invoice_body_display_items">
                        <table >
                            <tr>
                                <th>sr.</th>
                                <th>Product Name</th>
                                <th>Units</th>
                                <th>Price</th>
                                <th>gst</th>
                                <th>total</th>
                            </tr>
                            {
                                billingGoods && billingGoods.map((row, index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{row.goodsName}</td>
                                        <td>{row.units}</td>
                                        <td>{row.price}</td>
                                        <td>{row.gst}</td>
                                        <td>{row.total}</td>
                                        <td onClick={() => removeRow({index, total: row.total})} style={{cursor:"pointer", textAlign:"center"}} className="text-danger">remove row {index+1}</td>
                                    </tr>
                                    
                                ))
                            }
                            {
                                billingGoods.length > 0 && 
                                <tr style={{border:"0px"}}>
                                    <td style={{border:"0px"}}></td>
                                    <td style={{border:"0px"}}></td>
                                    <td style={{border:"0px"}}></td>
                                    <td style={{border:"0px"}}></td>
                                    <td style={{border:"0px"}}></td>
                                    <td >{totalPrice}</td>
                                    <td style={{border:"0px"}}></td>
                                </tr>
                            }
                            
                        </table>
                    </div>
            </div>        

            <div className="invoice_footer">
                <div onClick={handleSubmit} className="btn-1 outer-shadow hover-in-shadow ms-auto">Save</div>
            </div>      

        </div>
    )
}

export default CreateInvoiceForm
