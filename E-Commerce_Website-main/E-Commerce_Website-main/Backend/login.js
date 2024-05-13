const bcrypt = require('bcrypt');
const Users = require('./Users');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDetail = await Users.findOne({ email: email });

    if (userDetail) {
      const passwordMatch = await bcrypt.compare(password, userDetail.password);
      if (passwordMatch) {
        res.status(200).send(userDetail);
      } else {
        res.status(400).send({ error: "Invalid Password" });
      }
    } else {
      res.status(404).send({ error: "User does not exist" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};
