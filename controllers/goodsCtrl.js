const Users = require("../models/userModel");
const Goods = require("../models/goodsModel");


const goodsCtrl = {
    addGoods: async (req, res) => {
    
        try {
          const { goodsName, price, searchCode } = req.body;
           
          const goodsExist = await Goods.findOne({ goodsName });
          if (goodsExist) {
            return res.status(400).json({ msg: "You have already created an item with this name." });
          }

          const searchCodeExist = await Goods.findOne({ searchCode, user: req.user._id });
          if (searchCodeExist) {
            return res.status(400).json({ msg: "You already gave this code to another item." });
          }

          
    
          const newGoods = new Goods({goodsName, user: req.user._id , price, searchCode}) 
          
          await newGoods.save();

          await Users.findOneAndUpdate({_id: req.user._id}, {
              $push: { myGoods: newGoods}
          });

          res.json({
            msg: "New item created!",
            goods: {
                ...newGoods._doc
            }
           
          });
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      },

    getGoods: async (req, res) => {
    
        try {
          
          const myGoods = await Goods.find({user: req.user._id});
           
          res.json({
            goods: [
                ...myGoods
            ]
           
          });
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      },

      
}

module.exports = goodsCtrl;
