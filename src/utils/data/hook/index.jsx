import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

/**
 *
 * @file Component hook `useGet` that uses axios to fetch the data from the API backend or mocked
 * @namespace Hooks
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example const userInfo = useGet(url)
 * @prop    {string}  url      URL of the API call
 * @returns  {{isLoading:boolean, data: object, error: object}}           returns the loading status, data from the API call and error status
 */
const useGet = (url) => {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        setData(response.data.data)
        setError(false)
      })
      .catch((error) => {
        console.log(error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { isLoading, data, error }
}

useGet.propTypes = {
  /**
   * URL of the API
   */
  url: PropTypes.string.isRequired,
}

useGet.defaultProps = {
  url: 'http://localhost:3000',
}
export default useGet
