const server = 'http://localhost:3000'
const page = 'user'
const baseUrl = server + '/' + page + '/'
const userId = Math.random() < 0.5 ? 12 : 18
export { server, page, userId }
export default baseUrl
