const Users = require("../models/userModel");
const Clients = require("../models/clientModel");


const clientCtrl = {
    addClient: async (req, res) => {
    
        try {
          const { clientName, firstName, lastName, email,  mobile, address, street, zip, city, state, country, website } = req.body;
           
          const clientExist = await Clients.findOne({ clientName });
          if (clientExist) {
            return res.status(400).json({ msg: "You have already created a client with this name." });
          }

          const emailCheck = await Clients.findOne({ email });
          if (emailCheck) {
            return res.status(400).json({ msg: "You have already created a client with this email." });
          }

          const mobileCheck = await Clients.findOne({ mobile });
          if (mobileCheck) {
            return res.status(400).json({ msg: "You have already created a client with this mobile no." });
          }
    
          const newClient = new Clients({clientName, user: req.user._id , firstName, lastName, email,  mobile, address, street, zip, city, state, country, website}) 
          
          await newClient.save();

          await Users.findOneAndUpdate({_id: req.user._id}, {
              $push: { myClients: newClient}
          });

          res.json({
            msg: "New client created!",
            client: {
                ...newClient._doc
            }
           
          });
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      },

    getClients: async (req, res) => {
    
        try {
          
          const myClients = await Clients.find({user: req.user._id});
           
          res.json({
            clients: [
                ...myClients
            ]
           
          });
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      },

      
}

module.exports = clientCtrl;
