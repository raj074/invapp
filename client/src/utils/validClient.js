const validClient = ({ clientName, firstName, lastName, email, mobile, address, street, zip, city, state, country, website }) => {
    const err = {};

    if(!clientName){
        err.clientName = "Please add client name.";
    }else if(clientName.length > 50){
        err.clientName = "client name must be smaller than 50 characters.";
    }

    if(!firstName){
        err.firstName = "Please add first name.";
    }else if(firstName.length > 20){
        err.firstName = "first name must be smaller than 20 characters.";
    }

    if(!lastName){
        err.lastName = "Please add last name.";
    }else if(lastName.length > 20){
        err.lastName = "last name must be smaller than 20 characters.";
    }


    if (!email) {
      err.email = "Please add Email.";
    }


  if(!mobile){
    err.mobile = "Please add Mobile number.";
}else if(mobile.length !== 10){
    err.mobile = "Mobile no. must be 10 digits long.";
}

  if(!address){
    err.address = "Please add address.";
}else if(address.length > 100){
    err.address = "address  must be shorter than 100 characters.";
}

  if(!street){
    err.street = "Please add street.";
}else if(address.street > 60){
    err.street = "street  must be shorter than 60 characters.";
}

  if(!zip){
    err.zip = "Please add zip.";
}else if(zip.length !== 6){
    err.zip = "zip  must be 6 digits long.";
}

  if(!city){
    err.city = "Please add city.";
}else if(address.city > 25){
    err.city = "city name must be shorter than 25 characters.";
}

  if(!state){
    err.state = "Please add state.";
}else if(address.state > 20){
    err.state = "state name must be shorter than 20 characters.";
}

  if(!country){
    err.country = "Please add country.";
}else if(address.country > 20){
    err.country = "country name must be shorter than 20 characters.";
}

    return {
        errMsg: err,
        errLength: Object.keys(err).length  
    }
};

export default validClient;

