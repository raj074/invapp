const router = require("express").Router();
const clientCtrl = require("../controllers/clientCtrl");
const auth = require("../middleware/auth");

router.post("/addClient",auth,  clientCtrl.addClient);
router.get("/getClients",auth,  clientCtrl.getClients);

module.exports = router;
