export default function (sequelize, DataTypes) {
    const ProjectPhoto = sequelize.define('ProjectPhoto', {
        photoId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imageURL: {
            type: DataTypes.STRING(150),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        projectId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return ProjectPhoto
}