const { CompanyData, CompanyAccount } = require("./data");

async function CompanyName(req, res) {
  try {
    return res
      .status(200)
      .send({ status: true, message: "success", data: CompanyData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
}

async function Account(req, res) {
  try {
    const companyId = req.params.id;

    const data = CompanyAccount.filter((el) => el.companyId == companyId);
    console.log(data);
    return res
      .status(200)
      .send({ status: true, message: "success", data: data });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
}

module.exports = {
  CompanyName,
  Account,
};
