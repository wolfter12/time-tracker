import moment from 'moment';

const formatDuration = (duration) => {
  const currentDuration = moment.duration(duration);
  const seconds = `00${currentDuration.get('seconds')}`.slice(-2);
  const minutes = `00${currentDuration.get('minutes')}`.slice(-2);
  const hoursTotal = Math.floor(currentDuration.asHours()).toString();
  const hours =
    hoursTotal.length >= 2
      ? hoursTotal
      : hoursTotal.length === 1
      ? `0${hoursTotal}`
      : '00';
  return `${hours}:${minutes}:${seconds}`;
};

export default formatDuration;
