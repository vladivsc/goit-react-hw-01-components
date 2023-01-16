import PropTypes from 'prop-types';

import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(item => (
    <li key={item.id} className={styles.item}>
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  ));

  return (
    <>
      {title && (
        <section className={styles.statistics}>
          <h2 className={styles.title}>Upload stats</h2>
          <ul className={styles.list}>{elements}</ul>
        </section>
      )}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
