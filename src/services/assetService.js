
const {Position, Asset} = require('../models');

class AssetService {
  async createAsset(assetData) {
    return await Asset.create(assetData);
  }

  async getAssets(filters) {
    const { type } = filters;
    return await Asset.findAll({
      where: {
        type: type 
      }
    });
  }

  async getAssetById(id) {
      const asset = await Asset.findByPk(id, {
        include: [
          {
            model: Position,
            as: 'positions',
            separate: true,
            limit: 1,
            order: [['createdAt', 'DESC']],
          },
        ],
      });
  
      if (!asset) {
        return null;
      }
  
      // Extract the latest position
      let latestPosition = null;
      if (asset.positions && asset.positions.length > 0) {
        latestPosition = asset.positions[0];
      }
  
      // Prepare the response
      const assetData = asset.toJSON();
      assetData.latestPosition = latestPosition;
      delete assetData.positions; // Remove positions array if you only want the latest position
  
      return assetData;
    }
  


  async updateAsset(id, assetData) {
    const asset = await Asset.findByPk(id);
    if (!asset) {
      throw new Error('Asset not found');
    }
    return await asset.update(assetData);
  }

  async deleteAsset(id) {
    const asset = await Asset.findByPk(id);
    if (!asset) {
      throw new Error('Asset not found');
    }
    return await asset.destroy();
  }
}

module.exports = new AssetService();