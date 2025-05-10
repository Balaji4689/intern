const Customer = require("../models/Customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const secretKey = process.env.WhatIsYourName;

const customerRegister = async (req, res) => {
    const { Name, email, password, userType } = req.body;

    try {
        console.log("received data:", req.body);

        if (!Name || !email || !password || !userType) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) {
            return res.status(400).json({ error: "Email already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newCustomer = new Customer({
            Name,
            email,
            password: hashedPassword,
            userType
        });

        await newCustomer.save();
        res.status(201).json({ message: "Customer registered successfully!" });

    } catch (error) {
        console.error("Error during customer registration:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const customerLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const customer = await Customer.findOne({ email });

        if (!customer || !(await bcrypt.compare(password, customer.password))) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ customerId: customer._id }, secretKey, { expiresIn: "1h" });

        res.status(200).json({
            success: "Login successfully",
            token,
            customer: {
                id: customer._id,
                Name: customer.Name,
                email: customer.email,
                userType: customer.userType
            }
        });

        console.log(email, "token generated", token);

    } catch (error) {
        console.error("Error during customer login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const uploadProfilePhoto = async (req, res) => {
    try {
      const customerId = req.body.customerId;
      const imagePath = `/uploads/${req.file.filename}`;
  
      const customer = await Customer.findByIdAndUpdate(
        customerId,
        { photo: imagePath },
        { new: true }
      );
  
      res.status(200).json({
        success: "Profile photo uploaded successfully",
        photo: imagePath,
        customer,
      });
    } catch (error) {
      console.error("Profile upload error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  module.exports = {
    customerRegister,
    customerLogin,
    uploadProfilePhoto,
  };
  
