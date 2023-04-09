import { days } from '../config'

/**
 * Class representing the user's average sessions.
 * @class
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * const userAvgSession = new AvgSessionsData(data)
 */
class AvgSessionsData {
  /**
   * Creates the user's average sessions data.
   * @param   {Object}    data                          The user's data.
   * @param   {Object[]}  data.sessions                 The user's session data
   * @param   {!Number}   data.sessions.day             The day of the user's session data.
   * @param   {!Number}   data.sessions.sessionLength   The user's session lenght.
   */

  constructor(data) {
    this.isLoading = false
    this.data = data.sessions.map(({ sessionLength }, index) => {
      return {
        day: days[index],
        sessionLength: sessionLength,
      }
    })
  }
}

export default AvgSessionsData
