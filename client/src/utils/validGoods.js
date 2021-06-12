const validGoods = ({ goodsName, price, searchCode }) => {
    const err = {};

    if(!goodsName){
        err.goodsName = "Please add goods name.";
    }else if(goodsName.length > 50){
        err.goodsName = "goods name must be smaller than 50 characters.";
    }

    if(!price){
        err.price = "Please add price.";
    }
    if(!searchCode){
        err.searchCode = "Please add search code.";
    }else if(searchCode.length > 10){
        err.goodsName = "search code must be smaller than 10 characters.";
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length  
    }
};

export default validGoods;

