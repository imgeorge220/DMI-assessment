/*
 * Words Messages
 *
 * This contains all the text for the Words container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Words';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Check out all of these aweseme words!',
  },
});
