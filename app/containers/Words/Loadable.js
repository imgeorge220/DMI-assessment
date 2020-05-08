/**
 *
 * Asynchronously loads the component for Words
 *
 */
import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
