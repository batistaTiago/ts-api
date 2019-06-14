const Relations = (model) => {
    model.Project.hasMany(model.ProjectPhoto, { foreignKey: 'projectId' });
    model.ProjectPhoto.belongsTo(model.Project, { foreignKey: 'projectId' })
}

module.exports = Relations