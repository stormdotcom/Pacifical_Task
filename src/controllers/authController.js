const jwt = require('jsonwebtoken');

exports.authenticate = async (req, res) => {
    try {
      const { username, password } = req.body;
      if(username !=="test" && password !== "password123") {
        return res.status(401).json({ error: "Invalid credentials" });
      }
    //   generate token

      const user = { username:"test", email:"test@test.com", role:1, type:1, status:1}
      const token = jwt.sign(
        user, 
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: '1h' }
      );
      res.status(200).json({user, token});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };