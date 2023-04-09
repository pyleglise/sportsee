/**
 * Class representing the user's activity.
 * @class
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * const userActivity = new ActivityData(data)
 */
class ActivityData {
  /**
   * Creates the user's performances data.
   * @constructor
   * @param   {Object}    data                      The user's  data
   * @param   {Object[]}  data.sessions             The user's session data
   * @param   {!Number}   data.sessions.kilogram    The user's session weight.
   * @param   {!Number}   data.sessions.calories    The user's session calories spent.
   */

  constructor(data) {
    this.isLoading = false
    this.data = data.sessions.map(({ kilogram, calories }, index) => {
      return {
        day: index + 1,
        kilogram: kilogram,
        calories: calories,
      }
    })
  }
}

export default ActivityData
