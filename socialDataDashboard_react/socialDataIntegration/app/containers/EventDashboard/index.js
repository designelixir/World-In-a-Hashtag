/**
 *
 * EventDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEventDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class EventDashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>EventDashboard</title>
          <meta name="description" content="Description of EventDashboard" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

EventDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  eventDashboard: makeSelectEventDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'eventDashboard', reducer });
const withSaga = injectSaga({ key: 'eventDashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EventDashboard);
