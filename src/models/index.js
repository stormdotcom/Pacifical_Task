const Asset = require('./assetModel');
const Position = require('./positionModel');

Asset.hasMany(Position, {
  foreignKey: 'assetId',
  as: 'positions', 
});

Position.belongsTo(Asset, {
  foreignKey: 'assetId',
  as: 'asset',
});

module.exports = {
  Asset,
  Position,
};