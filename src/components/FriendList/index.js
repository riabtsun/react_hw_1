import styles from './friendsList.module.sass';

const FriendList = ({ friends }) => {
  const friend = friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className={styles.item}>
        <span
          className={
            isOnline
              ? `${styles.online + ' ' + styles.status}`
              : `${styles.offline + ' ' + styles.status}`
          }
        ></span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{name}</p>
      </li>
    );
  });
  return <ul className={styles.friendsList}>{friend}</ul>;
};

export default FriendList;
