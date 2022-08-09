import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useNavigate } from 'react-router';
import styles from './styles.module.css';
import cardBack from '../../assets/card-back.jpeg';

const Card = ({ content, isRandomCard }) => {
  const { id, image, name } = content;
  const isDetailsPage = window.location.pathname.includes('card/');
  const navigate = useNavigate();

  return isDetailsPage || isRandomCard ? (
    <article
      className={classNames(
        styles['acard-element'],
        styles['card-details-specifics']
      )}
    >
      <img
        className={styles['card-art']}
        src={image ? image : cardBack}
        alt={`${name} art`}
      />
    </article>
  ) : (
    <article
      className={styles['card-element']}
      onClick={() => navigate(`/card/${id}`)}
    >
      <img
        className={styles['card-art']}
        src={image ? image : cardBack}
        alt={`${name} art`}
      />
    </article>
  );
};

Card.defaultProps = {
  isRandomCard: false,
};

Card.propTypes = {
  content: PropTypes.shapeOf(PropTypes.shape(PropTypes.string)).isRequired,
  isRandomCard: PropTypes.bool,
};

export default Card;
