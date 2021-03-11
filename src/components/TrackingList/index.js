import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTrackers } from '../../actions/trackersActions';

import Tracker from '../Tracker';

class TrackingList extends React.Component {
  // useEffect(() => {
  //   this.props.getTrackers();
  // }, []);

  componentWillMount() {
    this.props.getTrackers();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTracker) {
      this.props.trackers.unshift(nextProps.newTracker);
    }
  }

  render() {
    const trackersList = this.props.trackers.map((tracker) => {
      return <Tracker key={tracker.id} tracker={tracker} />;
    });
    return <div>{trackersList}</div>;
  }
}

TrackingList.propTypes = {
  getTrackers: PropTypes.func.isRequired,
  trackers: PropTypes.array.isRequired,
  newTracker: PropTypes.object,
};

const mapStateToProps = (state) => ({
  trackers: state.trackers.items,
  newTracker: state.trackers.item,
});

export default connect(mapStateToProps, { getTrackers })(TrackingList);
