const positionService = require('../services/positionService');

exports.createPosition = async (req, res) => {
  try {
    const { id } = req.params;
    const positionData = req.body;
    const newPosition = await positionService.createPosition(id, positionData);
    res.status(201).json(newPosition);
  } catch (error) {
    if (error.message === 'Asset not found') {
      return res.status(404).json({ error: error.message });
    }
    res.status(400).json({ error: error.message });
  }
};

exports.getLatestPositions = async (req, res) => {
  try {
    const positions = await positionService.getLatestPositions();
    res.status(200).json(positions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLatestPositionByAssetId = async (req, res) => {
  try {
    const { id } = req.params;
    const position = await positionService.getLatestPositionByAssetId(id);
    res.status(200).json(position);
  } catch (error) {
    if (error.message === 'No positions found for this asset') {
      return res.status(404).json({ error: error.message });
    }
    res.status(500).json({ error: error.message });
  }
};
