import '../../utils/style/_user.scss'
import Loader from '../../components/loader'

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
