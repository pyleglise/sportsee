import axios from 'axios'
import PropTypes from 'prop-types'

/**
 *
 * @file API hook `getUserData` that uses axios to fetch the data from the API backend or mocked
 * @function getUserData
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example const userInfo = getUserData(url)
 * @prop    {string}  url      URL of the API call
 * @returns  {{isLoading:boolean, data: object, error: object}}           returns the loading status, data from the API call and error status
 */
const getUserData = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url)
      resolve(response.data.data)
    } catch (error) {
      reject(error)
    }
  })
}
export default getUserData

getUserData.propTypes = {
  /**
   * URL of the API
   */
  url: PropTypes.string.isRequired,
}

getUserData.defaultProps = {
  url: 'http://localhost:3000',
}
