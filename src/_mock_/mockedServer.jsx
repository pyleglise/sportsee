/**
 * @file Manage the launch of the mocked api using miragejs library
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @namespace MockedAPI
 */
import { createServer } from 'miragejs'
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './mockedData'
import { server, page } from '../utils/data/config'
import { Response } from 'miragejs'

/**
 * Check if the user exists before calling the mocked API
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @memberof MockedAPI
 * @method
 * @example
 * const id=12
 * if (userExists(id)) {
 *  console.log('User exists !')
 * }
 * @param {number}  id    The user Id to fetch
 * @returns {boolean}     Return `true`if the user exists, `false` if not.
 */
const userExists = (id) => {
  if (USER_MAIN_DATA.find((user) => user.id === id)) {
    return true
  }
  return false
}
/**
 * Sends a fake 404 error from the mocked API
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @memberof MockedAPI
 * @method
 * @example
 * return error404()
 * @returns {boolean}     Return `true`if the user exists, `false` if not.
 */
const error404 = () => {
  return new Response(404, {}, { errors: 'something went wrong' })
}
/**
 * Create a mocked server to mock an api using miragejs libray
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @memberof MockedAPI
 * @see {@link https://miragejs.com/}
 * @method
 * @example
 * createFakeApi()
 * @returns {object} Returns an object `data` containing the mocked data
 */
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
