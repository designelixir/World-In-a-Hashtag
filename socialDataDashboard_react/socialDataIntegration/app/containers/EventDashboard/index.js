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
import PersonCard from '../../components/PersonCard';
import PhotoGrid from '../../components/PhotoGrid';
import Trends from '../../components/Trends';

/* eslint-disable react/prefer-stateless-function */
export class EventDashboard extends React.PureComponent {
  render() {
    return (
      <article>
      
      <div className="container-fluid" style={{ marginTop: '2em' }}>

        <div className="row">
          <div className="col">
            <PersonCard topicInfo={this.props.topicInfo} />
          </div>

          <div className="col">
            <PhotoGrid />
          </div>

        </div>

        <div className="row">
          <br /> <br /><br /><br />
        </div>


        <div className="row" >

          <Trends />

        </div>
        <div className="row" >
          <div className="col" />
          
          <div className="col" />

        </div>


        <div className="row">
          <br /> <br /><br /><br />
        </div>
      </div >
    </article>
    );
  }
}

EventDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  topicInfo: PropTypes.object,
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
