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

    // private static productionConfig = {
    //     env: 'production',
    //     serverPort: 3000,
    //     db: 'db_portfolio',
    //     username: 'epiz_24054376',
    //     // password: '6rVGM8lEPR68NQc',
    //     password: '',
    //     dbURL: 'mysql://root@localhost:3306/db_portfolio',
    //     host: 'sql203.epizy.com',
    //     databasePort: 3306,
    //     secret: 'ca6a6567c5d3eb55cff99b90fe868dc4'
    // }

    private static productionConfig = {
        env: 'production',
        serverPort: 3000,
        db: 'db_portfolio',
        username: 'epiz_24054376',
        password: '6rVGM8lEPR68NQc',
        dbURL: 'mysql://epiz_24054376@sql203.epizy.com:3306/epiz_24054376_db_portfolio',
        host: 'sql203.epizy.com',
        databasePort: 3306,
        secret: 'ca6a6567c5d3eb55cff99b90fe868dc4'
    }
    
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
            return EnvironmentConfig.productionConfig
        } else if (env === 'test') {
            return EnvironmentConfig.testConfig
        }
    }
}