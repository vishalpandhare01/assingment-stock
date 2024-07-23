const { CompanyName, Account, getStock } = require("./controller");

const router = require("express").Router();

router.get("/companyName", CompanyName);
router.get("/account/:id", Account);
router.get("/getStock", getStock);

module.exports = router;
