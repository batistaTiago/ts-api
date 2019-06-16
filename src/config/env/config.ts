export class EnvironmentConfig {

    private static devConfig = {
        env: 'development',
        serverPort: 3000,
        db: 'db_portfolio',
        username: 'root',
        password: '',
        dbURL: 'mysql://root@localhost:3306/db_portfolio',
        host: 'localhost',
        databasePort: 3306,
        secret: '53cr3t'
    }

    private static productionConfig = require('./production.env')
    
    private static testConfig = {
        env: 'test',
        db: 'db_portfolio_test',
        serverPort: 3000,
        username: 'root',
        password: '',
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
            console.log(EnvironmentConfig.productionConfig)
            return EnvironmentConfig.productionConfig
        } else if (env === 'test') {
            return EnvironmentConfig.testConfig
        }
    }
}