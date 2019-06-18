const Relations = (models) => {
    models.Project.hasMany(models.ProjectPhoto, { foreignKey: 'projectId' });

    models.ProjectPhoto.belongsTo(models.Project, { foreignKey: 'projectId' })

    models.Project.belongsToMany(models.Tech, { through: 'ProjectTech', as: 'tech', foreignKey: 'projectId' })

    models.Tech.belongsToMany(models.Project, { through: 'ProjectTech', as: 'project', foreignKey: 'techId' })

}

module.exports = Relations