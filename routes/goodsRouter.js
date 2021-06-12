const router = require("express").Router();
const goodsCtrl = require("../controllers/goodsCtrl");
const auth = require("../middleware/auth");

router.post("/addGoods",auth,  goodsCtrl.addGoods);
router.get("/getGoods",auth,  goodsCtrl.getGoods);

module.exports = router;
