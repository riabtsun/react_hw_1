import styles from './statistics.module.sass';

const Statistics = ({ stats, title }) => {
  const randomBg = () => {
    return '#' + Math.random().toString(16).substring(2, 8).toUpperCase();
  };
  const item = stats.map(({ id, label, percentage }) => {
    return (
      <li style={{ background: randomBg() }} key={id} className={styles.item}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    );
  });

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>{item}</ul>
    </section>
  );
};

export default Statistics;
