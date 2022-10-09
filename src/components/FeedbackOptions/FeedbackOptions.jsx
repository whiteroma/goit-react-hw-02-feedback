import PropTypes from 'prop-types';
import { FeedbackList, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <FeedbackList>
    <li>
      <FeedbackButton type="button" onClick={onGood}>
        Good
      </FeedbackButton>
    </li>
    <li>
      <FeedbackButton type="button" onClick={onNeutral}>
        Neutral
      </FeedbackButton>
    </li>
    <li>
      <FeedbackButton type="button" onClick={onBad}>
        Bad
      </FeedbackButton>
    </li>
  </FeedbackList>
);

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
