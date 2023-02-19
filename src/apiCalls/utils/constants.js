const development = process.env.NODE_ENV === 'development';
export const url = development ? 'https://dev.hnp.ro/api' : 'https://dev.hnp.ro/api';