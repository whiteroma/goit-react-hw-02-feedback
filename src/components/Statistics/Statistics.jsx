import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, percentage}) => (
    <ul>
      <li>
        Good:<span>{good}</span>
      </li>
      <li>
        Neutral:<span>{neutral}</span>
      </li>
      <li>
        Bad:<span>{bad}</span>
      </li>
      <li>
        Total:<span>{total}</span>
      </li>
      <li>
        Positive feedback:<span>{percentage}</span>%
      </li>
    </ul>
);

export default Statistics;
