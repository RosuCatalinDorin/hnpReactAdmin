const development = process.env.NODE_ENV === 'development';
export const url = development ? 'https://catalinrosu.cloud:8080/api' : 'https://catalinrosu.cloud:8080/api';