const {Position, Asset} = require('../models');
const { Op } = require('sequelize');

class PositionService {
  async createPosition(assetId, positionData) {
    const asset = await Asset.findByPk(assetId);
    if (!asset) {
      throw new Error('Asset not found');
    }
    return await Position.create({ ...positionData, assetId });
  }

  async getLatestPositions() {
    const latestPositions = await Position.findAll({
      attributes: [
        'id',
        'assetId',
        'latitude',
        'longitude',
        'status',
        'createdAt',
      ],
      include: [
        {
          model: Asset,
          as: 'asset',
          attributes: ['name', 'type'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });
    return latestPositions;
  }

  async getLatestPositionByAssetId(assetId) {
    const position = await Position.findOne({
      where: { assetId },
      order: [['createdAt', 'DESC']],
    });
    if (!position) {
      throw new Error('No positions found for this asset');
    }
    return position;
  }
}

module.exports = new PositionService();
