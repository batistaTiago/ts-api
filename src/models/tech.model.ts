export default (sequelize, DataTypes) => {
    const Tech = sequelize.define('Tech', {
        techId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        }
    }, { freezeTableName: true })
    return Tech
};