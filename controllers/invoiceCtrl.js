const Users = require("../models/userModel");
const Goods = require("../models/goodsModel");
const SalesBill = require("../models/salesBillModel");
const ExcelJS = require("exceljs");

const invoiceCtrl = {

    addInvoice: async (req, res) => {
        
        const {clientId} = req.params
        
        const {invoice} = req.body

        

        const newInvoice = new SalesBill({...invoice, user:req.user._id, client: clientId});
        
        await newInvoice.save();
       
          const user = await Users.findOneAndUpdate({_id: req.user._id}, {$inc: {invoice: +1}}, {new:true})
        
        
        res.json({
            user,
            msg: "Invoice created!",
            invoice: {
                ...newInvoice._doc
            }
           
          });

    },

    getInvoices: async (req, res) => {
    
        try {
          
          const myInvoices= await SalesBill.find({user: req.user._id});
           
          res.json({
            invoices: [
                ...myInvoices
            ]
           
          });
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      },
}


module.exports = invoiceCtrl;
