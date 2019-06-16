export class EnvironmentConfig {

    private static devConfig = {
        env: 'development',
        serverPort: process.env.PORT || 3000,

        host: 'remotemysql.com',
        databasePort: 3306,
        db: 'dXUCze4agO',
        username: 'dXUCze4agO',
        password: '6GOBCtied9',
        dialect: 'mysql',

        dbURL: 'mysql://dXUCze4agO@remotemysql.com/dXUCze4agO',
        secret: '53cr3t'
    }

    private static productionConfig = {
        env: 'production',
        serverPort: process.env.PORT || 3000,
    
        host: 'remotemysql.com',
        databasePort: 3306,
        db: 'dXUCze4agO',
        username: 'dXUCze4agO',
        password: '6GOBCtied9',
        dialect: 'mysql',
    
        dbURL: 'mysql://dXUCze4agO@remotemysql.com:3306/dXUCze4agO',
        secret: 'ca6a6567c5d3eb55cff99b90fe868dc4'
    }
    
    private static testConfig = {
        env: 'test',
        db: 'db_portfolio_test',
        serverPort: 3000,
        username: 'root',
        password: '',
        dialect: 'mysql',
        dbURL: 'mysql://root@localhost:3306/db_portfolio',
        host: 'localhost',
        databasePort: 3306,
        secret: '53cr3t'
    }
    
    public static getSettings() {
        const env = (process.env.NODE_ENV || 'development').toLowerCase()
        if (env === 'development') {
            return EnvironmentConfig.devConfig
        } else if (env === 'production') {
            return EnvironmentConfig.productionConfig
        } else if (env === 'test') {
            return EnvironmentConfig.testConfig
        }
    }
}