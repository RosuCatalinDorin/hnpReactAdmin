const development = process.env.NODE_ENV === 'development';
export const url = development ? 'http://localhost:8080/api/' : 'http://catalinrosu.cloud:8080/';