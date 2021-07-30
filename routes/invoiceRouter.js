const router = require("express").Router();
const invoiceCtrl = require("../controllers/invoiceCtrl");
const auth = require("../middleware/auth");

router.post("/addInvoice/:clientId",auth,  invoiceCtrl.addInvoice);
router.get("/getInvoices",auth,  invoiceCtrl.getInvoices);

module.exports = router;
