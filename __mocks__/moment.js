// this tells jest that this should be the original module, not the mocked one
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};