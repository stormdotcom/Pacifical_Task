const express = require('express');
const app = express();
const dotenv = require('dotenv');
const db = require('./utils/db');


dotenv.config();


app.use(express.json());



// const assetRoutes = require('./routes/assetRoutes');
// const positionRoutes = require('./routes/positionRoutes');

// app.use('/assets', assetRoutes);
// app.use('/positions', positionRoutes);


app.get("/test",((req, res)=> {
    res.status(200).json({message:"test"})
})
)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
