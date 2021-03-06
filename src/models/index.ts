import { EnvironmentConfig } from '../config/env/config'

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = EnvironmentConfig.getSettings();
const env = config.env || 'development';
const extension = (env === 'development') ? '.ts' : '.js'
const db: any = {};
const modelRelations = require('./relations/relations')

let sequelize = new Sequelize(config.db, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === extension);
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

modelRelations(db)

module.exports = db;
