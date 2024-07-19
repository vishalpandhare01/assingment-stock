const { CompanyName, Account } = require("./controller")

const router = require("express").Router()

router.get("/companyName",CompanyName)
router.get("/account/:id",Account)


module.exports = router