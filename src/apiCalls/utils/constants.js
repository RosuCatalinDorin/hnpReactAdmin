const development = process.env.NODE_ENV === 'development';
export const url = development ? 'https://localhost:1243/api/' : '/api/';