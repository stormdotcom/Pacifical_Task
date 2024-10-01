const express = require('express');
const app = express();
const dotenv = require('dotenv');
const logger = require("morgan");
const http = require('http');
const socketIo = require('socket.io');

const db = require('./utils/db');
const assetRoutes = require('./routes/assetRoutes');
const positionRoutes = require('./routes/positionRoutes');
const authRoutes = require("./routes/authRoutes");
const { notFoundMiddleware, errorHandler } = require('./middlewares/errorMiddleware');
const { connectPG } = require('./utils/connection');
const socketHandler = require('./sockets');

const server = http.createServer(app);
const io = socketIo(server);

dotenv.config();
socketHandler(io);

app.use(logger('dev'));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/assets', assetRoutes);
app.use('/positions', positionRoutes);

//  ping test
app.get("/test",((req, res)=> {
    res.status(200).json({message:"test"})
}));


app.use(errorHandler);
app.use(notFoundMiddleware);

(async () => {
  await connectPG()
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
