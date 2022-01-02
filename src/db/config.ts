
const NODE_ENV = process.env.NODE_ENV || 'development';

const pathConfig = {
  entities: [`${__dirname}/entities/*.{ts,js}`],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
  subscribers: [`${__dirname}/subscribers/*.{ts,js}`],
  cli: {
    entitiesDir: `${__dirname}/entities`,
    migrationsDir: `${__dirname}/migrations`,
    subscribersDir: `${__dirname}/subscribers`,
  },
};

const defaultConfig = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.COLENDI_DB_NAME,
  synchronize: false,
  logging: false,
  ...pathConfig,
};

const dbConfig = {
  test: {
    ...defaultConfig,
    host: '127.0.0.1',
    username: 'root',
    password: 'Test123456',
    database: 'colendi_test',
  },
  development: {
    ...defaultConfig,
    host: process.env.DB_HOST || '127.0.0.1',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'Test123456',
    database: process.env.COLENDI_DB_NAME || 'colendi_case_dev',
  },
  stage: {
    ...defaultConfig,
  },
  production: defaultConfig,
};
export default dbConfig[NODE_ENV];
