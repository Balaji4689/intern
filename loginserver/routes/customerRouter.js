const express = require("express");
const customerControllers = require("../controllers/customerController");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post('/register', customerControllers.customerRegister);
router.post('/login', customerControllers.customerLogin);

// New route for uploading profile image
router.post(
  '/upload-profile',
  upload.single('profileImage'),
  customerControllers.uploadProfilePhoto
);

module.exports = router;

