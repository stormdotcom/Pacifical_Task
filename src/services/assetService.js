
const Asset = require('../models/assetModel');

class AssetService {
  async createAsset(assetData) {
    return await Asset.create(assetData);
  }

  async getAssets() {
    return await Asset.findAll();
  }

  async getAssetById(id) {
    return await Asset.findByPk(id);
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