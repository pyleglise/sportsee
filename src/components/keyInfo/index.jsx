import '../../utils/style/_user.scss'
import Loader from '../../components/loader'
import PropTypes from 'prop-types'
/**
 * Component that displays an icon and a key element of the user food need.
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * const keyData=2500
 * const img='/static/media/carbs-icon.svg'
 * const unit='kCal'
 * const category='Calories'
 * const isLoading=false
 * <KeyInfo
                          className="key-info"
                          keyData={keyData.calorieCount}
                          img={caloriesIcon}
                          unit={'kCal'}
                          category={'Calories'}
                          isLoading={userInfo.isLoading}
                        />
 * @prop {boolean}    isLoading         False if all the data have been fetched
 * @prop {number}     keyData           The data to be displayed   
 * @prop {string}     img               Relative path of the icon to be displayed
 * @prop {string}     unit              The unit of the data to be displayed
 * @prop {string}     category          THe category of the data to be displayed
 * @returns {JSX.Element}               A JSX element containing the icon, the data and unit, and the category of the data.
 */
const KeyInfo = ({ keyData, img, unit, category, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="key-info__container">
          <Loader />
        </div>
      ) : (
        <div>
          <div className="key-info__container">
            <img className="key-info__icon" src={img} alt="Calories" />
            <div className="key-info__value">
              <h5>{keyData + unit}</h5>
              <p>{category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default KeyInfo
KeyInfo.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  keyData: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}
