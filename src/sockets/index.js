const authMiddleware = require('./authMiddleware');
const chatHandlers = require('./chatHandlers');

module.exports = (io) => {

  io.use(authMiddleware);

  io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected`);
  });
};
