const bcrypt = require('bcrypt');
const Users = require('./Users');

module.exports = async (req, res) => {
  const { email, password, fullName } = req.body;

  try {
    const encrypt_password = await bcrypt.hash(password, 10);
    const userDetail = {
      email: email,
      password: encrypt_password,
      fullName: fullName,
    };

    const userExist = await Users.findOne({ email: email });

    if (userExist) {
      res.status(400).send({ message: "The Email is already in use!" });
    } else {
      await Users.create(userDetail);
      res.status(201).send({ message: "User Created Successfully" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};
