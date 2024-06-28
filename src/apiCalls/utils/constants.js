const development = process.env.NODE_ENV === 'development';
export const url = development ? 'http://localhost:8080/api' : 'https://dev.hnp.ro:8080/api';