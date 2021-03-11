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
};

const mapStateToProps = (state) => ({
  trackers: state.trackers.items,
});

export default connect(mapStateToProps, { getTrackers })(TrackingList);
