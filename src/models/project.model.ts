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
        gitURL: {
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
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        deployURL: {
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