
const express = require('express');
const router = express.Router();
const positionController = require('../controllers/positionController');
const authMiddleware = require('../middlewares/authMiddleware');


router.use(authMiddleware);

router.post('/:assetId', positionController.createPosition);
router.get('/:assetId/latest', positionController.getLatestPositionByAssetId);
router.get('/latest', positionController.getLatestPositions);


module.exports = router;
