import PropTypes from 'prop-types';
import { FeedbackList, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <FeedbackList>
    <li>
      <FeedbackButton type="button" onClick={onGood} hoverColor='lime'>
        Good
      </FeedbackButton>
    </li>
    <li>
      <FeedbackButton type="button" onClick={onNeutral} hoverColor='gold'>
        Neutral
      </FeedbackButton>
    </li>
    <li>
      <FeedbackButton type="button" onClick={onBad} hoverColor='red'>
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
