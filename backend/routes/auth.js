const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const { encryptionKey } = require('../models/User');

const JWT_SECRET = 'GamingEc$mmerce';

// Registration Route
router.post('/createuser', [
    body('firstname', 'Enter a valid first name').isLength({ min: 3 }),
    body('lastname', 'Enter a valid last name').isLength({ min: 3 }),
    body('gender', 'Enter a valid gender').isIn(['Male', 'Female', 'Other']), // Add valid gender values
    body('mob', 'Enter a valid mobile number').isNumeric(), // Change this to isNumeric
    body('DOB', 'Enter a valid date of birth'),
    body('email', 'Enter a valid email').isEmail(),
    body('adhar','Adhar card number is of 12 length').isLength(12),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    body('role','Role is compulsary').notEmpty(),
    body('approval','Wait for approval'),
    body('username', 'Username is required').notEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: 'Sorry, a user with this email already exists' });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        mob: req.body.mob,
        DOB: req.body.DOB,
        adhar:req.body.adhar,
        email: req.body.email,
        password: secPass,
        role: req.body.role,
        approval: false,
        username: req.body.username
      });
      const data = {
        user: {
          id: user.id
        }
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ success: true , authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
});

// Login Route
router.post('/login', [
    body('username', 'Username or email is required').notEmpty(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
      // Find user by either email or username
      let user = await User.findOne({ $or: [{ email: username }, { username: username }] });
      if (!user) {
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ success: false, error: "Please try to login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
          role: user.role,
          approval: user.approval
        }
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ success: true, authtoken, role: user.role, approval: user.approval });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
});

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
