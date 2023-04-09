import { frenchCategories } from '../config'

/**
 * Class representing the user's performances.
 * @class
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * const userPerf = new PerformanceData(data)
 */
class PerformanceData {
  /**
   * Creates the user's performances data.
   * @param   {Array}     data             The data array fetched from API.
   * @param   {Object}    data.kind        The performance types.
   * @param   {Object[]}  data.data        The user's data.
   * @param   {!Number}   data.data.kind   The user's data performance type.
   * @param   {!Number}   data.data.value  The user's data value.
   */

  constructor(data) {
    this.isLoading = false
    this.data = data.data
      .map((performance, index) => {
        return {
          kind: frenchCategories[index],
          value: performance.value,
        }
      })
      .reverse()
  }
}

export default PerformanceData
