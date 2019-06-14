export class EnvironmentConfig {
    
    // private static devConfig = {
    //     dialect: 'mysql',        
    //     env: 'development',
    //     serverPort: 3000,
    //     driver: "mysql",
    //     username: "root",
    //     database: "db_portfolio",
    //     password: "",
    //     host: "127.0.0.1",
    //     port: "3306"
    // }    
    
    private static devConfig = {
        env: 'development',
        db: 'db_portfolio',
        username: 'root',
        password: '',
        host: 'localhost',
        serverPort: 3000,
        pgPort: 3306,
        dbURL: 'mysql://root@localhost:3306/db_portfolio',
        secret: '53cr3t'
    }

    private static productionConfig = {
        env: 'production',
        db: 'db_portfolio',
        username: 'root',
        password: '',
        host: 'localhost',
        serverPort: 3000,
        pgPort: 3306,
        dbURL: 'mysql://root@localhost:3306/db_portfolio',
        secret: '53cr3t'
    }
    
    private static testConfig = {
        env: 'test',
        db: 'ts-api-test',
        dialect: 'postgres',
        username: 'root',
        password: 'root',
        host: 'localhost',
        serverPort: 3000,
        pgPort: 5432,
        dbURL: 'postgres://postgres:root@localhost:5432/ts-api-test',
        secret: '53cr3t'
    }
    
    public static getSettings() {
        const env = process.env.NODE_ENV.toLowerCase() || 'development'
        if (env === 'development') {
            return EnvironmentConfig.devConfig
        } else if (env === 'production') {
            return EnvironmentConfig.productionConfig
        } else if (env === 'test') {
            return EnvironmentConfig.testConfig
        }
    }
}