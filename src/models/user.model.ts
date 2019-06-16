import * as BCrypt from 'bcryptjs'

export default function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
    })

    User.beforeCreate(
        (user) => {
            return hashPassword(user)
        }
    )

    User.beforeUpdate(
        (user) => {
            return hashPassword(user)
        }
    )

    function hashPassword(user) {
        const salt = BCrypt.genSaltSync(10)
        user.set('password', BCrypt.hashSync(user.password, salt))
    }

    return User
}


// export class User {
//     constructor(sequelize, DataTypes) {
//         sequelize.define('User', {
//             id: {
//                 type: DataTypes.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true
//             },
//             name: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     notEmpty: true,
//                 }
//             },
//             email: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     notEmpty: true,
//                 }
//             },
//             password: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     notEmpty: true,
//                 }
//             }
//         })
//     }
// }