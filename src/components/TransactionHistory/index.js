import styles from './TransactionHistory.module.sass';

const TransactionHistory = ({ items }) => {
  const tableRow = items.map(({ id, type, amount, currency }, i) => {
    const fill = i => {
      return i % 2 == 0 ? styles.itemRowFill : styles.itemRowWhite;
    };

    const rowStyle = [styles.itemRow, fill(i)].join(' ');

    return (
      <tr fill={fill(i)} className={rowStyle} key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });

  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className={styles.columnHead}>Type</th>
          <th className={styles.columnHead}>Amount</th>
          <th className={styles.columnHead}>Currency</th>
        </tr>
      </thead>

      <tbody>{tableRow}</tbody>
    </table>
  );

  let rows = document.querySelectorAll('tr');
  console.log(rows);
};

export default TransactionHistory;
