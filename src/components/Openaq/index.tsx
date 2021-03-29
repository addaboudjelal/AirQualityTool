import OpenaqContext, { withOpenaq } from './context';
import Openaq from './openaq.logic';

/**
 * Openaq : provide all the methodes to fetch the data from the API
 *  OpenaqContext | withOpenaq : using createContext react hook and HOC principal we provide to all the Component children those methodes
 */

export default Openaq;
export { OpenaqContext, withOpenaq }