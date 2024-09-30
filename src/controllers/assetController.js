const assetService = require('../services/assetService');

exports.createAsset = async (req, res) => {
  try {
    const assetData = req.body;
    const newAsset = await assetService.createAsset(assetData);
    res.status(201).json(newAsset);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAssets = async (req, res) => {
  try {
    const assets = await assetService.getAssets();
    res.status(200).json(assets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAssetById = async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await assetService.getAssetById(id);
    if (!asset) {
      return res.status(404).json({ error: 'Asset not found' });
    }
    res.status(200).json(asset);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const assetData = req.body;
    const updatedAsset = await assetService.updateAsset(id, assetData);
    res.status(200).json(updatedAsset);
  } catch (error) {
    if (error.message === 'Asset not found') {
      return res.status(404).json({ error: error.message });
    }
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAsset = async (req, res) => {
  try {
    const { id } = req.params;
    await assetService.deleteAsset(id);
    res.status(200).json({ message: 'Asset deleted successfully' });
  } catch (error) {
    if (error.message === 'Asset not found') {
      return res.status(404).json({ error: error.message });
    }
    res.status(500).json({ error: error.message });
  }
};
