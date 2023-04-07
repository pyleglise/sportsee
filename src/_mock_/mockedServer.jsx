import { createServer } from 'miragejs'
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './mockedData'
import { server, page } from '../utils/data/config'
import { Response } from 'miragejs'

const userExists = (id) => {
  if (USER_MAIN_DATA.find((user) => user.id === id)) {
    return true
  }
  return false
}
const error404 = () => {
  return new Response(404, {}, { errors: 'something went wrong' })
}
const createFakeApi = () => {
  createServer({
    routes() {
      this.urlPrefix = server
      this.namespace = page

      this.get('/:id', (schema, request) => {
        const id = parseInt(request.params.id)
        if (userExists(id)) {
          return {
            data: USER_MAIN_DATA.find((user) => user.id === id),
          }
        } else {
          return error404()
        }
      })
      this.get('/:id/activity', (schema, request) => {
        const id = parseInt(request.params.id)
        if (userExists(id)) {
          return {
            data: USER_ACTIVITY.find(
              (userActivity) => userActivity.userId === id
            ),
          }
        } else {
          return error404()
        }
      })
      this.get('/:id/average-sessions', (schema, request) => {
        const id = parseInt(request.params.id)
        if (userExists(id)) {
          return {
            data: USER_AVERAGE_SESSIONS.find(
              (userActivity) => userActivity.userId === id
            ),
          }
        } else {
          return error404()
        }
      })
      this.get('/:id/performance', (schema, request) => {
        const id = parseInt(request.params.id)
        if (userExists(id)) {
          return {
            data: USER_PERFORMANCE.find(
              (userPerformance) => userPerformance.userId === id
            ),
          }
        } else {
          return error404()
        }
      })
    },
  })
}
export default createFakeApi
