/**
 * Class representing the user's informations and key datas.
 * @class
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * const userInfo = new UserInfoData(data)
 */

class UserInfoData {
  /**
   * Creates the user's informations and key datas.
   * @constructor
   * @param   {Object}    data                                The data object fetched from API.
   * @param   {!Number}   data.id                             The user's id.
   * @param   {Object}    data.userInfos                      The user's informations
   * @param   {!Number}   data.userInfos.age                  The user's age
   * @param   {String}    data.userInfos.firstName            The user's first name
   * @param   {String}    data.userInfos.lastName             The user's last name
   * @param   {Object}    data.keyData                        The user's key data.
   * @param   {!Number}   data.keyData.calorieCount           The user's calorie count
   * @param   {!Number}   data.keyData.carbohydrateCount      The user's carbonhydrate count
   * @param   {!Number}   data.keyData.lipidCount             The user's lipid count
   * @param   {!Number}   data.keyData.proteinCount           The user's protein count
   * @param   {!Number}   data.score                          The user's score
   * @param   {!Number}   data.todayScore                     The user's score
   */

  constructor(data) {
    this.isLoading = false
    this.id = data.id
    this.keyData = data.keyData
    this.score = data.score || data.todayScore
    this.userInfos = data.userInfos
    this.userInfos.fullName =
      data.userInfos.firstName + ' ' + data.userInfos.lastName
  }
}

export default UserInfoData
