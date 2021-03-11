import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { MdPlayCircleOutline as Start } from 'react-icons/md';
import { addTracker } from '../../actions/trackersActions';

// const TRACKERS = 'trackers';

class TrackerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onButtonHandler = this.onButtonHandler.bind(this);
  }

  onInputHandler(e) {
    this.setState({ name: e.target.value });
  }
  onButtonHandler() {
    const now = moment();
    const newTracker = {
      id: uuidv4(),
      name: this.state.name || now.format('DD/MM/YYYY HH:mm:ss'),
      breakpoint: now.toJSON(),
      duration: moment.duration().toJSON(),
      paused: false,
    };
    this.props.addTracker(newTracker);
    this.setState({ name: '' });
  }
  render() {
    const { name } = this.state;
    return (
      <div>
        <input type="text" value={name} onInput={this.onInputHandler} />
        <Start onClick={this.onButtonHandler} />
      </div>
    );
  }
}

TrackerInput.propTypes = {
  addTracker: PropTypes.func.isRequired,
};

export default connect(null, { addTracker })(TrackerInput);
