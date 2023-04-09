import '../../utils/style/_loader.scss'
/**
 * Component that  display the spinning wheel while waiting for datas to be fetched\
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * return (
 *   <Loader />
 * )
 * @returns {JSX.Element}   A JSX.Element that displays a spinning wheel to be while waiting for datas to be fetched.
 */
const Loader = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
export default Loader
