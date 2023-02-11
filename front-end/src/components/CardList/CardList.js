import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './styles.module.css';

const CardList = ({ cards }) => {
  return (
    <section className={styles['card-list']}>
      {cards.length > 0
        ? cards.map((card) => <Card content={card} key={card.id} />)
        : 'There are no cards to show.'}
    </section>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
};

export default CardList;
