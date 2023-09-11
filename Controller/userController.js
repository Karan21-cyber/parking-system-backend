const User = require("../Model/userModel");
const generateToken = require("./generateToken");

// user register
const registerUser = async (req, res) => {
  const { name, email, phone, address, password } = req.body;

  if (!name || !email || !phone || !address || !password) {
    res.status(400).json({ error: "fill all the fields" });
    throw new Error("Please Enter all the fields");
  }

  const userExists = await User.findOne({ email });

  if (!userExists) {
    const user = await User.create({
      name,
      email,
      phone,
      address,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({
        error: "Unable to create new user",
      });
      throw new Error("Failed to create user");
    }
  } else {
    res.status(400).json({ error: "User Already Exists" });
    throw new Error("User Already Exists");
  }
};

// user login

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Please Enter all the fields" });
      throw new Error("Please enter all the fields");
    }

    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({
        error: "Unable to find user",
      });
      throw new Error("Unable to find User");
    }
  } catch (error) {
    res.status(400).send("Error Occured user is unable to find");
  }
};

const allUsers = async (req, res) => {
  const data = await User.find({});

  if (data) {
    res.status(201).json(data);
  } else {
    res.status(400).json({ Error: "Unable to fetch data" });
  }
};

module.exports = { registerUser, userLogin, allUsers };
