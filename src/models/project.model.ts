export default function (sequelize, DataTypes) {
    const Project = sequelize.define('Project', {
        projectId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING(32),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        gitUrl: {
            type: DataTypes.STRING(150),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        destaque: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        status: {
            type: DataTypes.STRING(32),
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        deployUrl: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        percentageComplete: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
    return Project
}