
const express = require('express');
const router = express.Router();
const positionController = require('../controllers/positionController');
const authMiddleware = require('../middlewares/authMiddleware');


router.use(authMiddleware);

router.post('/:id', positionController.createPosition);
router.get('/:id/latest', positionController.getLatestPositionByAssetId);
router.get('/latest', positionController.getLatestPositions);


module.exports = router;
